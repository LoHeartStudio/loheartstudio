import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { WorksSection } from "@/components/WorksSection";
import { BottomHero } from "@/components/BottomHero";


export default function Home() {
  return (
    <div className="grain">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <WorksSection />
        <BottomHero />
      </main>
    </div>
  );
}
