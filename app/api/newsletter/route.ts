import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In a real implementation, you would:
    // 1. Validate the email more thoroughly
    // 2. Check if the email is already subscribed
    // 3. Add the email to your newsletter service (Mailchimp, ConvertKit, etc.)
    // 4. Store the subscription in your database if needed

    // This is a mock implementation
    console.log(`Newsletter signup: ${email}`);

    // Simulate a successful subscription
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing to our newsletter!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request' 
      },
      { status: 500 }
    );
  }
}
