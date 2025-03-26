import React from 'react';
import Image from 'next/image';

// Benefits data
const benefits = [
  "Naturally, dairy-free, nut-free, and lactose-free.",
  "Rich in fiber for better digestion.",
  "Packed with healthy fats for sustained energy.",
  "Low in sugar, but naturally sweet.",
  "High in essential vitamins and minerals, like magnesium, potassium, and iron."
];

const WhyTigerNutMilk = () => {
  return (
    <section className="py-16 px-4 bg-[#FDF8F0] border-y border-gray-200">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-mochiy text-kunaya-green mb-8 text-center">
          Why Tiger Nut Milk?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/whytigerimage.png"
              alt="Tiger nuts, coconut and tiger nut milk"
              width={600}
              height={450}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          {/* Right side - Benefits list and tiger illustration */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center">
            {/* Benefits list */}
            <div className="mb-8 md:mb-0 md:pr-6">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-kunaya-green font-bold mr-2 text-xl">•</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tiger illustration */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden" style={{ backgroundColor: '#4CAF50' }}>
                <Image
                  src="/tiger.png"
                  alt="Tiger"
                  width={180}
                  height={180}
                  className="object-contain"
                  style={{ width: '180px', height: '180px', objectFit: 'contain' }}
                />
              </div>
              <p className="text-lg font-clash text-kunaya-green font-medium mt-3">
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
