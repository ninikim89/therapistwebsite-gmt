import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EmpathySection from '@/components/EmpathySection';
import WhoWeHelpSection from '@/components/WhoWeHelpSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import MethodsSection from '@/components/MethodsSection';
import OfficeSection from '@/components/OfficeSection';
import AboutSection from '@/components/AboutSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import BreathingPacer from '@/components/BreathingPacer';
import OceanBackground from '@/components/OceanBackground';

export default function Home() {
  return (
    <>
      <OceanBackground />
      <div className="relative z-10">
      <Navbar />
      <BreathingPacer />

      <main className="w-full">
        <HeroSection />
        <EmpathySection />
        <WhoWeHelpSection />
        <SpecialtiesSection />
        <MethodsSection />
        <OfficeSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
      </div>
    </>
  );
}
