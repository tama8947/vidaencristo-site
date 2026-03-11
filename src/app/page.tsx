import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PrayersSection from "@/components/PrayersSection";
import RosarySection from "@/components/RosarySection";
import WorksOfMercySection from "@/components/WorksOfMercySection";
import CatechismSection from "@/components/CatechismSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PrayersSection />
      <RosarySection />
      <WorksOfMercySection />
      <CatechismSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
