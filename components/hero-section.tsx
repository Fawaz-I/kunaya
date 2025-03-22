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
          className='object-cover md:object-center object-[60%_center]'
          sizes="100vw"
        />
      </div>
      
      {/* Text content positioned based on screen size for optimal visibility */}
      <div className='container mx-auto px-4 h-screen z-10 relative'>
        <div className='flex h-full items-center md:justify-start justify-center'>
          <div className='max-w-xl md:bg-black/30 bg-black/15 p-8 rounded-xl md:backdrop-blur-sm backdrop-blur-[1px] animate-fade-in-up md:mr-0 md:ml-0 md:mt-0 mt-auto mb-[10vh] md:w-auto w-[95%] md:static absolute md:left-auto left-[2.5%] right-[2.5%]'>
            <h1 className='font-mochiy text-white text-5xl md:text-6xl lg:text-[60px] leading-tight mb-6 animate-slide-in-left [animation-delay:200ms]'>
              Discover
              <br />
              Tiger Nut Milk
            </h1>
            <p className='font-clash text-white text-xl md:text-2xl mb-8 animate-slide-in-left [animation-delay:400ms]'>
              Pure Plant Based Power from West Africa
              <br />
              in every nourishing sip.
            </p>
            <Link
              href='/newsletter'
              className='inline-block bg-kunaya-orange hover:bg-[#e67a38] text-white font-mochiy text-lg py-3 px-6 rounded-full transition-colors animate-slide-in-left [animation-delay:600ms] hover:animate-pulse-subtle'
            >
              Join Our Newsletter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
