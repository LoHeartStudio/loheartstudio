import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { WorksSection } from "@/components/WorksSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <WorksSection />
      </main>
      <Footer />
    </div>
  );
}
