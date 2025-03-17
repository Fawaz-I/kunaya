import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RootedInCulture() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image container */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image 
                src="/faridat1.png" 
                alt="Person in yellow apron holding tiger nuts" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Content container */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-['Mochiy_Pop_One'] text-2xl sm:text-3xl lg:text-4xl text-[#4EAE32] leading-tight">
              Rooted in Culture, Driven by Impact
            </h2>
            
            <h3 className="font-['Mochiy_Pop_One'] text-xl sm:text-2xl text-[#4EAE32] leading-relaxed">
              Nourishing You, Empowering Farmers!
            </h3>
            
            <p className="font-['Clash_Display'] text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Rooted in West African tradition, Kunaya brings you the ancient wisdom of tiger nut milk. 
              Our journey began in the fertile soils of Nigeria, where tiger nuts have been cherished for generations.
            </p>
            
            <Link href="/about" className="inline-flex items-center group">
              <span className="font-bold text-[#F0833C] mr-2 group-hover:mr-3 transition-all duration-300">
                Learn More
              </span>
              <ArrowRight className="w-4 h-4 text-[#F0833C] group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
