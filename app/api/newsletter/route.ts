import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Initialize Mailchimp with your API key
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
});

export async function POST(request: NextRequest) {
  try {
    const { email, recaptchaToken } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
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
        // Continue with subscription even if reCAPTCHA verification fails in production
        // to avoid blocking legitimate users if the reCAPTCHA service is down
        if (process.env.NODE_ENV !== 'production') {
          return NextResponse.json(
            { success: false, message: 'Error verifying CAPTCHA.' },
            { status: 500 }
          );
        }
      }
    }

    // Check if we have the required environment variables or if we're in test mode
    const isTestMode = process.env.NEWSLETTER_TEST_MODE === 'true';
    
    if (isTestMode) {
      console.log(`Newsletter signup (TEST MODE): ${email}`);
      return NextResponse.json(
        { 
          success: true, 
          message: 'Test successful! In production, this would subscribe you to our newsletter.' 
        },
        { status: 200 }
      );
    }
    
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_LIST_ID || !process.env.MAILCHIMP_SERVER_PREFIX) {
      console.warn('Mailchimp environment variables not set. Falling back to mock implementation.');
      console.log(`Newsletter signup (mock): ${email}`);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for subscribing to our newsletter! (Note: This is currently in test mode)' 
        },
        { status: 200 }
      );
    }

    try {
      // Add the subscriber to your Mailchimp list
      const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
        email_address: email,
        status: 'subscribed', // Use 'pending' if you want double opt-in
        merge_fields: {
          // You can add additional fields here if needed
          // FNAME: firstName,
          // LNAME: lastName,
        },
      });

      console.log('Mailchimp subscription successful:', response);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for subscribing to our newsletter!' 
        },
        { status: 200 }
      );
    } catch (mailchimpError: unknown) {
      console.error('Mailchimp API error:', mailchimpError);
      
      // Handle case where the email is already subscribed
      const error = mailchimpError as { response?: { body?: { title?: string } } };
      if (error.response?.body?.title === 'Member Exists') {
        return NextResponse.json(
          { 
            success: true, 
            message: 'You\'re already subscribed to our newsletter!' 
          },
          { status: 200 }
        );
      }
      
      throw mailchimpError; // Re-throw to be caught by the outer catch
    }
  } catch (error) {
    console.error('Newsletter signup error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
