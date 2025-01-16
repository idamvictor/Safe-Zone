import BeInTheLoop from "@/components/be-in-the-poop";
import HeroSection from "@/components/hero-section";
import Highlights from "@/components/highlights";
import TestimonialSection from "@/components/testimonial-section";
import Features from "@/components/features";
import DownloadSection from "@/components/download-section";
import ObserverProvider from "@/context/ObserverProvider";

export default function Home() {
  return (
    <ObserverProvider>
        <HeroSection />
        <Highlights />
        <BeInTheLoop />
        <TestimonialSection />
        <Features />
        <DownloadSection />
    </ObserverProvider>
  );
}
