import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import { GameProvider } from "@/components/game/GameContext";
import ViceAtmosphere from "@/components/game/ViceAtmosphere";
import IntroLoader from "@/components/game/IntroLoader";
import LiveOpsTicker from "@/components/game/LiveOpsTicker";
import MissionToast from "@/components/game/MissionToast";
import MinimapRadar from "@/components/game/MinimapRadar";
import CommandMenu from "@/components/game/CommandMenu";
import ViceRadio from "@/components/game/ViceRadio";
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
        <ViceAtmosphere />
        <IntroLoader />
        <ScrollProgress />
        <Navbar />
        <LiveOpsTicker />
        <MissionToast />
        <CommandMenu />
        <MinimapRadar />
        <ViceRadio />
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
