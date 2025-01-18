import BeInTheLoop from "@/components/be-in-the-poop";
import HeroSection from "@/components/hero-section";
import Highlights from "@/components/highlights";
import TestimonialSection from "@/components/testimonial-section";
import Features from "@/components/features";
import DownloadSection from "@/components/download-section";

export default function Home() {
  return (
    <div className="motion-preset-slide-right-md">
      <HeroSection />
      <Highlights />
      <BeInTheLoop />
      <TestimonialSection />
      <Features />
      <DownloadSection />
    </div>
  );
}
