import React from 'react';
import Image from 'next/image';

const TigerNutFacts = () => {
  return (
    <div className="w-full bg-[#F5E6CC]">
      {/* Mobile layout */}
      <div className="md:hidden flex flex-col p-8">
        <p className="text-kunaya-green text-2xl font-clash font-semibold leading-relaxed mb-8 animate-fade-in-up">
          Tiger nuts are not actually nuts! They are little nutrient dense root tubers that sport a stripey tiger like exterior: hence the name Tiger Nuts.
        </p>
        <div className="relative h-80 w-full animate-fade-in-up [animation-delay:300ms]">
          <Image
            src="/tigernutsnobg.png"
            alt="Tiger nuts"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-contain scale-125 hover:scale-110 transition-transform duration-500"
            priority
          />
        </div>
      </div>
      
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="relative py-16" style={{ minHeight: "450px" }}>
          <div className="max-w-7xl mx-auto px-8 flex">
            {/* Left side with text */}
            <div className="w-1/2 flex items-center pr-8">
              <div className="w-full animate-slide-in-left">
                <p className="text-kunaya-green text-2xl lg:text-3xl font-clash font-semibold leading-relaxed">
                  Tiger nuts are not actually nuts! They are little nutrient dense root tubers that sport a stripey tiger like exterior: hence the name Tiger Nuts.
                </p>
              </div>
            </div>
            
            {/* Right side with image - properly contained */}
            <div className="w-1/2 flex items-center justify-center">
              <div className="relative animate-slide-in-right" style={{ width: "100%", height: "450px" }}>
                <Image
                  src="/tigernutsnobg.png"
                  alt="Tiger nuts"
                  fill
                  sizes="(max-width: 1024px) 50vw, 600px"
                  className="object-contain scale-110 hover:scale-120 transition-transform duration-700"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TigerNutFacts;
