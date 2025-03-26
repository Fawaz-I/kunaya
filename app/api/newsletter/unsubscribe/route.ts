import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { rateLimitRequest, getRateLimitResponse } from '@/lib/rate-limit';

// Initialize Mailchimp with your API key
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
});

export async function GET(request: NextRequest) {
  // Apply rate limiting - 5 requests per minute per IP
  const rateLimitResult = await rateLimitRequest(request, {
    limit: 5,
    windowInSeconds: 60,
    identifier: 'newsletter-unsubscribe-get'
  });
  
  if (!rateLimitResult.success) {
    return getRateLimitResponse(rateLimitResult);
  }
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');
  
  // More robust email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Invalid email address' },
      { status: 400 }
    );
  }
  
  // Sanitize email input to prevent injection attacks
  const sanitizedEmail = email.trim().toLowerCase();

  // Check if we have the required environment variables or if we're in test mode
  const isTestMode = process.env.NEWSLETTER_TEST_MODE === 'true';
  
  if (isTestMode) {
    console.log(`Newsletter unsubscribe (TEST MODE): ${sanitizedEmail}`);
    return NextResponse.redirect(new URL(`/newsletter/unsubscribe?success=true&email=${encodeURIComponent(sanitizedEmail)}&test=true`, request.url));
  }
  
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_LIST_ID || !process.env.MAILCHIMP_SERVER_PREFIX) {
    console.warn('Mailchimp environment variables not set. Falling back to mock implementation.');
    console.log(`Newsletter unsubscribe (mock): ${sanitizedEmail}`);
    
    return NextResponse.redirect(new URL(`/newsletter/unsubscribe?success=true&email=${encodeURIComponent(sanitizedEmail)}&mock=true`, request.url));
  }

  try {
    // Find the subscriber in your Mailchimp list
    const subscriberHash = Buffer.from(email.toLowerCase()).toString('hex');
    
    try {
      // Check if the member exists
      await mailchimp.lists.getListMember(
        process.env.MAILCHIMP_LIST_ID,
        subscriberHash
      );
      
      // Update the member's status to 'unsubscribed'
      await mailchimp.lists.updateListMember(
        process.env.MAILCHIMP_LIST_ID,
        subscriberHash,
        {
          status: 'unsubscribed'
        }
      );

      console.log('Mailchimp unsubscribe successful for:', email);
      
      return NextResponse.redirect(new URL(`/newsletter/unsubscribe?success=true&email=${encodeURIComponent(email)}`, request.url));
    } catch (mailchimpError: unknown) {
      console.error('Mailchimp API error:', mailchimpError);
      
      // Handle case where the email is not found
      const error = mailchimpError as { status?: number };
      if (error.status === 404) {
        return NextResponse.redirect(new URL(`/newsletter/unsubscribe?success=false&email=${encodeURIComponent(email)}&reason=not_found`, request.url));
      }
      
      throw mailchimpError; // Re-throw to be caught by the outer catch
    }
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    
    return NextResponse.redirect(new URL(`/newsletter/unsubscribe?success=false&email=${encodeURIComponent(email)}`, request.url));
  }
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting - 5 requests per minute per IP
    const rateLimitResult = await rateLimitRequest(request, {
      limit: 5,
      windowInSeconds: 60,
      identifier: 'newsletter-unsubscribe-post'
    });
    
    if (!rateLimitResult.success) {
      return getRateLimitResponse(rateLimitResult);
    }
    const { email, recaptchaToken } = await request.json();
    
    // Verify reCAPTCHA token if provided
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      try {
        const recaptchaResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
          { method: 'POST' }
        );
        
        const recaptchaResult = await recaptchaResponse.json();
        
        if (!recaptchaResult.success) {
          console.error('reCAPTCHA verification failed:', recaptchaResult);
          return NextResponse.json(
            { success: false, message: 'CAPTCHA verification failed. Please try again.' },
            { status: 400 }
          );
        }
      } catch (error) {
        console.error('Error verifying reCAPTCHA:', error);
        return NextResponse.json(
          { success: false, message: 'Error verifying CAPTCHA. Please try again.' },
          { status: 500 }
        );
      }
    } else if (!process.env.NEWSLETTER_TEST_MODE) {
      // Only require reCAPTCHA in production mode
      return NextResponse.json(
        { success: false, message: 'CAPTCHA verification required' },
        { status: 400 }
      );
    }

    // More robust email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Sanitize email input to prevent injection attacks
    const sanitizedEmail = email.trim().toLowerCase();

    // Check if we have the required environment variables or if we're in test mode
    const isTestMode = process.env.NEWSLETTER_TEST_MODE === 'true';
    
    if (isTestMode) {
      console.log(`Newsletter unsubscribe (TEST MODE): ${sanitizedEmail}`);
      return NextResponse.json(
        { 
          success: true, 
          message: 'Test successful! In production, this would unsubscribe you from our newsletter.' 
        },
        { status: 200 }
      );
    }
    
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_LIST_ID || !process.env.MAILCHIMP_SERVER_PREFIX) {
      console.warn('Mailchimp environment variables not set. Falling back to mock implementation.');
      console.log(`Newsletter unsubscribe (mock): ${sanitizedEmail}`);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'You have been unsubscribed from our newsletter. (Note: This is currently in test mode)' 
        },
        { status: 200 }
      );
    }

    try {
      // Find the subscriber in your Mailchimp list
      const subscriberHash = Buffer.from(sanitizedEmail).toString('hex');
      
      try {
        // Check if the member exists
        await mailchimp.lists.getListMember(
          process.env.MAILCHIMP_LIST_ID,
          subscriberHash
        );
        
        // Update the member's status to 'unsubscribed'
        await mailchimp.lists.updateListMember(
          process.env.MAILCHIMP_LIST_ID,
          subscriberHash,
          {
            status: 'unsubscribed'
          }
        );

        console.log('Mailchimp unsubscribe successful for:', email);
        
        return NextResponse.json(
          { 
            success: true, 
            message: 'You have been successfully unsubscribed from our newsletter.' 
          },
          { status: 200 }
        );
      } catch (mailchimpError: unknown) {
        console.error('Mailchimp API error:', mailchimpError);
        
        // Handle case where the email is not found
        const error = mailchimpError as { status?: number };
        if (error.status === 404) {
          return NextResponse.json(
            { 
              success: false, 
              message: 'This email address is not subscribed to our newsletter.' 
            },
            { status: 404 }
          );
        }
        
        throw mailchimpError; // Re-throw to be caught by the outer catch
      }
    } catch (error) {
      console.error('Newsletter unsubscribe error:', error);
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'An error occurred while processing your request. Please try again later.' 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
