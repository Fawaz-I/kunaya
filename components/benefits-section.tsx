import React from 'react';
import Image from 'next/image';

export default function BenefitsSection() {
  return (
    <section className="bg-[#F0FDF4] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="font-mochiy text-kunaya-green text-4xl text-center mb-14 animate-fade-in-down">
          Nature&apos;s Gift to Your Health
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {/* Heart Healthy Card */}
          <div className="flex flex-col items-center text-center animate-fade-in-up [animation-delay:200ms]">
            <div className="mb-6 animate-bounce-subtle">
              <Image
                src="/heart.png"
                alt="Heart Icon"
                width={48}
                height={48}
                priority
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-mochiy text-kunaya-green text-xl mb-4">Heart Healthy</h3>
            <p className="font-clash text-kunaya-gray">
              Rich in healthy fats and nutrients<br />
              that support cardiovascular health
            </p>
          </div>

          {/* 100% Natural Card */}
          <div className="flex flex-col items-center text-center animate-fade-in-up [animation-delay:400ms]">
            <div className="mb-6 animate-bounce-subtle [animation-delay:300ms]">
              <Image
                src="/leaf.png"
                alt="Leaf Icon"
                width={48}
                height={48}
                priority
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-mochiy text-kunaya-green text-xl mb-4">100% Natural</h3>
            <p className="font-clash text-kunaya-gray">
              Made from pure tiger nuts<br />
              with no artificial additives
            </p>
          </div>

          {/* Probiotic Rich Card */}
          <div className="flex flex-col items-center text-center animate-fade-in-up [animation-delay:600ms]">
            <div className="mb-6 animate-bounce-subtle [animation-delay:600ms]">
              <Image
                src="/ameboa.png"
                alt="Probiotic Icon"
                width={48}
                height={48}
                priority
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-mochiy text-kunaya-green text-xl mb-4">Probiotic Rich</h3>
            <p className="font-clash text-kunaya-gray">
              Supports digestive health<br />
              with natural probiotics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
