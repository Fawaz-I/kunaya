'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'inline';
  'aria-labelledby'?: string;
}

export default function NewsletterSignup({ 
  className = '', 
  variant = 'default',
  'aria-labelledby': ariaLabelledby
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // More robust email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Execute the invisible reCAPTCHA
    const token = await recaptchaRef.current?.executeAsync();
    if (!token) {
      setStatus('error');
      setMessage('CAPTCHA verification failed. Please try again.');
      return;
    }
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, recaptchaToken: token }),
      });
      
      // Reset the reCAPTCHA for next submission
      recaptchaRef.current?.reset();
      
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.message || 'Failed to subscribe');
      
      setStatus('success');
      setMessage(data.message || 'Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
    }
  };

  if (variant === 'inline') {
    const formId = ariaLabelledby ? `${ariaLabelledby}-form` : 'inline-newsletter-form';
    const emailId = ariaLabelledby ? `${ariaLabelledby}-email` : 'inline-newsletter-email';
    
    return (
      <div className={`${className} animate-fade-in-up`}>
        {/* Invisible reCAPTCHA */}
        <div className="recaptcha-container" style={{ position: 'fixed', bottom: '0', right: '0', zIndex: '9999' }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          />
        </div>
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-3"
          id={formId}
          aria-labelledby={ariaLabelledby}
        >
          <div className="flex-grow">
            <label htmlFor={emailId} className="sr-only">Email address</label>
            <input
              id={emailId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-kunaya-green transition-all"
              disabled={status === 'loading'}
              required
              aria-required="true"
              aria-invalid={status === 'error'}
              aria-describedby={status !== 'idle' ? `${formId}-feedback` : undefined}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-kunaya-orange hover:bg-[#e67a38] text-white font-mochiy px-6 py-3 rounded-full transition-colors disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-kunaya-orange focus:ring-offset-2"
            aria-busy={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {status !== 'idle' && (
          <p 
            className={`mt-3 text-sm ${status === 'error' ? 'text-red-500' : 'text-kunaya-green'} animate-fade-in`}
            id={`${formId}-feedback`}
            role={status === 'error' ? 'alert' : 'status'}
          >
            {message}
          </p>
        )}
      </div>
    );
  }

  const formId = 'default-newsletter-form';
  const emailId = 'default-newsletter-email';
  const titleId = 'newsletter-title';
  
  return (
    <div className={`bg-[#F5F7FA] p-8 rounded-2xl shadow-sm ${className} animate-fade-in-up`}>
      <h3 className="font-mochiy text-kunaya-green text-2xl mb-4" id={titleId}>Join Our Newsletter</h3>
      <p className="text-gray-600 mb-6">
        Stay updated with our latest products, promotions, and tiger nut facts.
      </p>
      
      {/* Invisible reCAPTCHA */}
      <div className="recaptcha-container" style={{ position: 'fixed', bottom: '0', right: '0', zIndex: '9999' }}>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        />
      </div>
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-4"
        id={formId}
        aria-labelledby={titleId}
      >
        <div>
          <label htmlFor={emailId} className="sr-only">Email address</label>
          <input
            id={emailId}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-kunaya-green transition-all"
            disabled={status === 'loading'}
            required
            aria-required="true"
            aria-invalid={status === 'error'}
            aria-describedby={status !== 'idle' ? `${formId}-feedback` : undefined}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-kunaya-orange hover:bg-[#e67a38] text-white font-mochiy py-3 px-6 rounded-full transition-colors disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-kunaya-orange focus:ring-offset-2"
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
        </button>
      </form>
      
      {status !== 'idle' && (
        <p 
          className={`mt-4 ${status === 'error' ? 'text-red-500' : 'text-kunaya-green'} animate-fade-in`}
          id={`${formId}-feedback`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </div>
  );
}
