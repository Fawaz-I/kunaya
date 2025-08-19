'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'

// Custom background component with proper styling to match newsletter page
function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A2A12]">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A2A12]/90 to-[#0A2A12]/80"></div>
      <div className="absolute inset-0 z-20 bg-[url('/pattern.png')] bg-repeat opacity-5"></div>
    </div>
  )
}

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{
    text: string
    type: 'success' | 'error' | 'info'
  } | null>(null)

  useEffect(() => {
    const success = searchParams.get('success')
    const emailParam = searchParams.get('email')
    const testMode = searchParams.get('test')
    const mockMode = searchParams.get('mock')
    const reason = searchParams.get('reason')

    if (emailParam) {
      setEmail(emailParam)
    }

    if (success === 'true') {
      if (testMode) {
        setMessage({
          text: 'Test successful! In production, this would unsubscribe you from our newsletter.',
          type: 'success',
        })
      } else if (mockMode) {
        setMessage({
          text: 'You have been unsubscribed from our newsletter. (Note: This is currently in test mode)',
          type: 'success',
        })
      } else {
        setMessage({
          text: 'You have been successfully unsubscribed from our newsletter.',
          type: 'success',
        })
      }
    } else if (success === 'false') {
      if (reason === 'not_found') {
        setMessage({
          text: 'This email address is not subscribed to our newsletter.',
          type: 'error',
        })
      } else {
        setMessage({
          text: 'An error occurred while processing your request. Please try again.',
          type: 'error',
        })
      }
    }
  }, [searchParams])

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // More robust email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!email || !emailRegex.test(email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' })
      return
    }

    // Sanitize email before sending
    const sanitizedEmail = email.trim().toLowerCase()

    setIsSubmitting(true)
    setMessage({ text: 'Processing your request...', type: 'info' })

    let token = null
    // Execute the invisible reCAPTCHA only if site key is available
    if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      token = await recaptchaRef.current?.executeAsync()
      if (!token) {
        setIsSubmitting(false)
        setMessage({ text: 'CAPTCHA verification failed. Please try again.', type: 'error' })
        return
      }
    }

    try {
      const response = await fetch('/api/newsletter/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: sanitizedEmail, recaptchaToken: token }),
      })

      // Reset the reCAPTCHA for next submission
      recaptchaRef.current?.reset()

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to unsubscribe')
      }

      setMessage({ text: data.message, type: 'success' })
    } catch (error) {
      setMessage({
        text:
          error instanceof Error ? error.message : 'Something went wrong. Please try again later.',
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen pb-16 pt-24 text-white">
      {/* Custom background */}
      <Background />

      <div className="container mx-auto px-4 pt-16">
        <div className="mx-auto max-w-lg">
          <div className="mb-8 animate-fade-in-down text-center">
            <h1 className="mb-4 font-mochiy text-3xl text-kunaya-green md:text-4xl">
              Unsubscribe from Newsletter
            </h1>
          </div>

          <div className="animate-fade-in-up">
            {/* Invisible reCAPTCHA - only render if site key is available */}
            {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
              <div
                className="recaptcha-container"
                style={{ position: 'fixed', bottom: '0', right: '0', zIndex: '9999' }}
              >
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
              </div>
            )}

            <div className="rounded-2xl border border-kunaya-green/20 bg-[#143620]/80 p-8 text-white shadow-xl backdrop-blur-md">
              {message && (
                <div
                  className={`mb-6 rounded-lg p-4 ${
                    message.type === 'success'
                      ? 'border border-green-700/50 bg-green-800/50 text-green-100'
                      : message.type === 'error'
                        ? 'border border-red-700/50 bg-red-800/50 text-red-100'
                        : 'border border-blue-700/50 bg-blue-800/50 text-blue-100'
                  }`}
                  role={message.type === 'error' ? 'alert' : 'status'}
                >
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-gray-200">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full rounded-full border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-kunaya-green"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-kunaya-orange px-6 py-3 font-mochiy text-white transition-colors hover:bg-[#e67a38] focus:outline-none focus:ring-2 focus:ring-kunaya-orange focus:ring-offset-2 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Unsubscribe'}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 animate-fade-in-up text-center">
            <Link
              href="/"
              className="inline-flex items-center text-white transition-colors hover:text-kunaya-orange"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

// Loading fallback component
function UnsubscribeLoading() {
  return (
    <main className="relative min-h-screen pb-16 pt-24 text-white">
      <Background />
      <div className="container mx-auto px-4 pt-16 text-center">
        <div className="mx-auto max-w-lg">
          <div className="animate-pulse">
            <div className="mx-auto mb-8 h-10 w-3/4 rounded bg-kunaya-green/20"></div>
            <div className="rounded-2xl border border-kunaya-green/20 bg-[#143620]/80 p-8 shadow-xl backdrop-blur-md">
              <div className="mb-6 h-6 w-1/2 rounded bg-white/10"></div>
              <div className="mb-4 h-12 rounded-full bg-white/10"></div>
              <div className="h-12 rounded-full bg-kunaya-orange/50"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Export the page with Suspense boundary
export default function UnsubscribePage() {
  return (
    <Suspense fallback={<UnsubscribeLoading />}>
      <UnsubscribeContent />
    </Suspense>
  )
}
