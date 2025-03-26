import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden'>
      {/* Full width background image */}
      <div className='absolute inset-0 w-full h-full z-0 animate-fade-in'>
        <Image
          src='/Milk-pack-mockup-kunaya.png'
          alt='Kunaya milk pack mockup'
          fill
          priority
          className='object-cover md:object-center object-[70%_center]'
          sizes="100vw"
        />
      </div>
      
      {/* Text content positioned on the left with dark overlay for readability */}
      <div className='container mx-auto px-4 h-screen z-10 relative'>
        <div className='flex h-full items-center'>
          <div className='max-w-xl bg-black/30 p-8 rounded-xl backdrop-blur-sm animate-fade-in-up'>
            <h1 className='font-mochiy text-white text-5xl md:text-6xl lg:text-[60px] leading-tight mb-6 animate-slide-in-left [animation-delay:200ms] [animation-fill-mode:backwards]'>
              Discover
              <br />
              Tiger Nut Milk
            </h1>
            <p className='font-clash text-white text-xl md:text-2xl mb-8 animate-slide-in-left [animation-delay:400ms] [animation-fill-mode:backwards]'>
              Pure Plant Based Power from West Africa
              <br />
              in every nourishing sip.
            </p>
            <Link
              href='/newsletter'
              className='inline-block bg-kunaya-orange hover:bg-[#e67a38] text-white font-mochiy text-lg py-3 px-6 rounded-full transition-colors animate-slide-in-left [animation-delay:600ms] [animation-fill-mode:backwards] hover:animate-pulse-subtle'
            >
              Join Our Newsletter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
