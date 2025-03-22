import Link from 'next/link';
import NewsletterSignup from '@/components/newsletter-signup';

// Custom background component with proper styling
function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A2A12]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A12]/90 to-[#0A2A12]/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5 z-20"></div>
    </div>
  );
}

export const metadata = {
  title: 'Join Our Newsletter | Kunaya',
  description: 'Subscribe to the Kunaya newsletter for updates on our tiger nut milk products, promotions, and tiger nut facts.',
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 text-white relative">
      {/* Custom background */}
      <Background />
      
      <div className="container mx-auto px-4 pt-16">
        {/* Space maintained for consistent positioning */}
        <div className="h-6"></div>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-down">
            <h1 className="font-mochiy text-kunaya-green text-4xl md:text-5xl mb-6">
              Join Our Newsletter
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Stay connected with Kunaya and be the first to know about our new products, 
              special offers, and the latest news about tiger nut milk.
            </p>
          </div>

          <div className="animate-fade-in-up">
            <div className="bg-[#143620]/80 backdrop-blur-md p-8 rounded-2xl shadow-xl text-white border border-kunaya-green/20">
              <h2 className="font-mochiy text-kunaya-green text-2xl mb-6 text-center">
                What You&apos;ll Receive
              </h2>
              
              <ul className="space-y-5 mb-8 text-lg">
                <li className="flex items-start">
                  <div className="text-kunaya-orange mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white">Early access to new product launches</p>
                </li>
                <li className="flex items-start">
                  <div className="text-kunaya-orange mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white">Exclusive discounts and promotions</p>
                </li>
                <li className="flex items-start">
                  <div className="text-kunaya-orange mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white">Healthy recipes using tiger nut milk</p>
                </li>
                <li className="flex items-start">
                  <div className="text-kunaya-orange mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white">Updates on our sustainability initiatives</p>
                </li>
              </ul>

              <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                <NewsletterSignup className="dark" />
              </div>

              <p className="text-sm text-gray-300 mt-6 text-center">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in-up">
            <Link 
              href="/" 
              className="inline-flex items-center text-white hover:text-kunaya-orange transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
