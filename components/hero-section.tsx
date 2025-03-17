import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative h-screen bg-[#f8f0df] overflow-hidden'>
      {/* Text content positioned on the left */}
      <div className='container mx-auto px-4 h-full z-10 relative'>
        <div className='flex h-full items-center'>
          <div className='max-w-xl'>
            <h1 className='font-mochiy text-kunaya-green text-5xl md:text-6xl lg:text-[60px] leading-tight mb-6'>
              Discover
              <br />
              Tiger Nut Milk
            </h1>
            <p className='font-clash text-kunaya-gray text-xl md:text-2xl mb-8'>
              Pure Plant Based Power from West Africa
              <br />
              in every nourishing sip.
            </p>
            <Link
              href='/newsletter'
              className='inline-block bg-kunaya-orange hover:bg-[#e67a38] text-white font-mochiy text-lg py-3 px-6 rounded-full transition-colors'
            >
              Join Our Newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* Milk splash and product image positioned on the right side */}
      <div className='absolute right-0 top-0 bottom-0 w-1/2 md:w-3/5 lg:w-2/3 z-0'>
        {/* Background milk splash */}
        <div className='absolute inset-0'>
          <Image
            src='/milk-splash-bg.png'
            alt='Milk Splash'
            fill
            priority
            className='object-cover object-left'
          />
        </div>
      </div>
    </section>
  );
}
