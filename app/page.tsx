import BeInTheLoop from "@/components/be-in-the-poop";
import HeroSection from "@/components/hero-section";
import Highlights from "@/components/highlights";
import TestimonialSection from "@/components/testimonial-section";
import Features from "@/components/features";
import DownloadSection from "@/components/download-section";
import EstateGuard from "@/components/EstateGuard";
import GreaterGood from "@/components/GreaterGood";
import Impact from "@/components/Impact";
import SuccessStories from "@/components/SucessStories";

export default function Home() {
  return (
    <div className="motion-preset-slide-right-md">
      <HeroSection />
      <Highlights />
      <BeInTheLoop />
      <TestimonialSection />
      <Features />
      <GreaterGood />
      <EstateGuard />
      <Impact />
      <SuccessStories />
      <DownloadSection />
    </div>
  );
}
