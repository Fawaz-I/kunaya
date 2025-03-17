import React from 'react';
import Image from 'next/image';

// Benefits data
const benefits = [
  "Naturally, dairy-free, nut-free, and lactose-free.",
  "Rich in fiber for better digestion.",
  "Packed with healthy fats for sustained energy.",
  "Low in sugar, but naturally sweet.",
  "High in essential vitamins and minerals, like magnesium, potassium, and iron"
];

const WhyTigerNutMilk = () => {
  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden relative bg-white max-w-screen-2xl mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-mochiy text-kunaya-green mb-12 md:mb-16 lg:mx-auto text-center">
          Why Tiger Nut Milk?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-center justify-between">
          {/* Image column */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <Image
              src="/whytigerimage.png"
              alt="Tiger nuts"
              width={600}
              height={600}
              className="rounded-lg w-full h-auto object-cover shadow-sm"
            />
          </div>
          
          {/* Benefits column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <ul className="space-y-3 lg:space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-kunaya-green flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base md:text-lg font-clash">{benefit}</span>
                </li>
              ))}
            </ul>
            
            {/* Tiger image with caption */}
            <div className="flex flex-col items-center mt-12">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/tiger.png"
                  alt="Tiger"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-clash text-kunaya-green font-medium mt-3 italic">
                The purr-fect plant-based milk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTigerNutMilk;
