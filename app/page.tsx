import HeroSection from '@/components/hero-section';
import BenefitsSection from '@/components/benefits-section';
import WhyTigerNutMilk from '@/components/why-tiger-nut-milk';
import TigerNutFacts from '@/components/tiger-nut-facts';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <WhyTigerNutMilk />
      <TigerNutFacts />

      {/* Other sections will go here */}
    </main>
  );
}
