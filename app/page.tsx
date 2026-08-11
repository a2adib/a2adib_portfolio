import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/sections/Hero";
import BackendSystems from "@/components/sections/BackendSystems";
import SelectedWork from "@/components/sections/SelectedWork";
import TrackRecord from "@/components/sections/TrackRecord";
import HowIWork from "@/components/sections/HowIWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <BackendSystems />
      <SelectedWork />
      <TrackRecord />
      <HowIWork />
      <Contact />
    </main>
  );
}
