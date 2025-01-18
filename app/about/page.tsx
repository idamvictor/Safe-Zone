import Hero from "@/components/about/hero";
import { MapSection } from "@/components/about/map-section";
import { Statistics } from "@/components/about/statistics";
import DownloadSection from "@/components/download-section";

export default function page() {
  return <div className="motion-preset-slide-right-md">
    <Hero />
    <MapSection />
    <Statistics />
    <DownloadSection />
  </div>;
}
