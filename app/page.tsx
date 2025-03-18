import HeroSection from '@/components/hero-section';
import BenefitsSection from '@/components/benefits-section';
import WhyTigerNutMilk from '@/components/why-tiger-nut-milk';
import TigerNutFacts from '@/components/tiger-nut-facts';
import RootedInCulture from '@/components/rooted-in-culture';
import OurProducts from '@/components/our-products';
import OurImpact from '@/components/our-impact';
import FullWidthImage from '@/components/full-width-image';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <WhyTigerNutMilk />
      <TigerNutFacts />
      <RootedInCulture />
      <OurProducts />
      <OurImpact />
      <FullWidthImage />

      {/* Other sections will go here */}
    </main>
  );
}
