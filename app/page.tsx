import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import { GameProvider } from "@/components/game/GameContext";
import MissionToast from "@/components/game/MissionToast";
import MinimapRadar from "@/components/game/MinimapRadar";
import LoadoutWheel from "@/components/game/LoadoutWheel";
import Hero from "@/components/sections/Hero";
import BackendSystems from "@/components/sections/BackendSystems";
import SelectedWork from "@/components/sections/SelectedWork";
import TrackRecord from "@/components/sections/TrackRecord";
import HowIWork from "@/components/sections/HowIWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <GameProvider>
      <main className="relative min-h-screen bg-vice-bg text-vice-text">
        <ScrollProgress />
        <Navbar />
        <MissionToast />
        <LoadoutWheel />
        <MinimapRadar />
        <Hero />
        <BackendSystems />
        <SelectedWork />
        <TrackRecord />
        <HowIWork />
        <Contact />
      </main>
    </GameProvider>
  );
}
