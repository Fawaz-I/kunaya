import React from 'react';
import Image from 'next/image';

const TigerNutFacts = () => {
  return (
    <div className="w-full bg-[#F5E6CC]">
      {/* Mobile layout */}
      <div className="md:hidden flex flex-col p-8">
        <p className="text-kunaya-green text-2xl font-clash font-semibold leading-relaxed mb-8">
          Tiger nuts are not actually nuts! They are little nutrient dense root tubers that sport a stripey tiger like exterior: hence the name Tiger Nuts.
        </p>
        <div className="relative h-80 w-full">
          <Image
            src="/tigernutsnobg.png"
            alt="Tiger nuts"
            fill
            className="object-contain scale-125"
            priority
          />
        </div>
      </div>
      
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="relative py-16" style={{ minHeight: "450px" }}>
          <div className="max-w-7xl mx-auto px-8 flex">
            {/* Left side with text */}
            <div className="w-2/5 flex items-center">
              <div className="max-w-md">
                <p className="text-kunaya-green text-2xl lg:text-3xl font-clash font-semibold leading-relaxed">
                  Tiger nuts are not actually nuts! They are little nutrient dense root tubers that sport a stripey tiger like exterior: hence the name Tiger Nuts.
                </p>
              </div>
            </div>
            
            {/* Right side with image - now taking more space and positioned more right */}
            <div className="w-3/5 flex items-center justify-end">
              <div className="relative" style={{ width: "750px", height: "550px", marginRight: "-40px" }}>
                <Image
                  src="/tigernutsnobg.png"
                  alt="Tiger nuts"
                  fill
                  className="object-contain scale-140"
                  sizes="(max-width: 1024px) 60vw, 750px"
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
