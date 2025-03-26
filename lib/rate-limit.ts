import { NextRequest, NextResponse } from 'next/server';
// We'll use a type definition for Redis to avoid the need for the actual package
// until it's installed
type Redis = {
  exists: (key: string) => Promise<number>;
  set: (key: string, value: number, options: { ex: number }) => Promise<string>;
  incr: (key: string) => Promise<number>;
  ttl: (key: string) => Promise<number>;
};

// We'll initialize Redis when the package is installed
// For now, we'll use the in-memory store
const redis: Redis | null = null;

// Fallback in-memory store if Redis is not available
const inMemoryStore: Record<string, { count: number; resetTime: number }> = {};

interface RateLimitOptions {
  limit?: number;       // Maximum number of requests
  windowInSeconds?: number;  // Time window in seconds
  identifier?: string;  // Custom identifier (defaults to IP)
}

export async function rateLimitRequest(
  request: NextRequest,
  options: RateLimitOptions = {}
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  const {
    limit = 5,                // Default: 5 requests
    windowInSeconds = 60,     // Default: per minute
    identifier = '',
  } = options;

  // Get IP address from headers or use provided identifier
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'anonymous';
  const key = `rate-limit:${identifier || ip}`;
  
  const now = Math.floor(Date.now() / 1000);
  const resetTime = now + windowInSeconds;

  // Use Redis if available, otherwise use in-memory store
  if (redis) {
    try {
      // Initialize counter if it doesn't exist
      const exists = await redis.exists(key);
      if (!exists) {
        await redis.set(key, 1, { ex: windowInSeconds });
        return { success: true, limit, remaining: limit - 1, reset: resetTime };
      }

      // Increment counter
      const count = await redis.incr(key);
      const ttl = await redis.ttl(key);
      
      // Check if limit exceeded
      if (count > limit) {
        return { 
          success: false, 
          limit, 
          remaining: 0, 
          reset: now + ttl 
        };
      }

      return { 
        success: true, 
        limit, 
        remaining: limit - count, 
        reset: now + ttl 
      };
    } catch (error) {
      console.error('Redis rate limiting error:', error);
      // Fall back to in-memory store if Redis fails
    }
  }

  // In-memory store implementation
  if (!inMemoryStore[key]) {
    inMemoryStore[key] = { count: 1, resetTime };
    // Set cleanup timeout
    setTimeout(() => {
      delete inMemoryStore[key];
    }, windowInSeconds * 1000);
    
    return { success: true, limit, remaining: limit - 1, reset: resetTime };
  }

  // Check if window has expired and reset if needed
  if (now > inMemoryStore[key].resetTime) {
    inMemoryStore[key] = { count: 1, resetTime };
    return { success: true, limit, remaining: limit - 1, reset: resetTime };
  }

  // Increment counter
  inMemoryStore[key].count++;
  
  // Check if limit exceeded
  if (inMemoryStore[key].count > limit) {
    return { 
      success: false, 
      limit, 
      remaining: 0, 
      reset: inMemoryStore[key].resetTime 
    };
  }

  return { 
    success: true, 
    limit, 
    remaining: limit - inMemoryStore[key].count, 
    reset: inMemoryStore[key].resetTime 
  };
}

export function getRateLimitResponse(
  rateLimitResult: Awaited<ReturnType<typeof rateLimitRequest>>
): NextResponse {
  return NextResponse.json(
    { 
      error: 'Too many requests', 
      message: 'Please try again later' 
    },
    { 
      status: 429,
      headers: {
        'X-RateLimit-Limit': rateLimitResult.limit.toString(),
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': rateLimitResult.reset.toString(),
        'Retry-After': (rateLimitResult.reset - Math.floor(Date.now() / 1000)).toString()
      }
    }
  );
}
