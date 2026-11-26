"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

export type DistrictId = "top" | "act1" | "act2" | "act3" | "act4" | "contact";

export interface MissionToast {
  id: number;
  title: string;
  subtitle: string;
  reward: string;
  tone?: "gold" | "cyan" | "pink";
}

interface GameContextValue {
  wantedLevel: number;
  respect: number;
  activeDistrict: DistrictId;
  wheelOpen: boolean;
  sfxEnabled: boolean;
  overdriveMode: boolean;
  completedMissions: string[];
  toast: MissionToast | null;
  setWheelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSfx: () => void;
  toggleOverdrive: () => void;
  addHeat: (amount?: number) => void;
  clearHeat: () => void;
  addRespect: (amount: number) => void;
  triggerMission: (
    id: string,
    title: string,
    subtitle: string,
    reward?: string,
    tone?: "gold" | "cyan" | "pink"
  ) => void;
  playClick: () => void;
}

const GameContext = createContext<GameContextValue | null>(null);

export const DISTRICTS: { id: DistrictId; code: string; name: string; zone: string; x: number; y: number }[] = [
  { id: "top", code: "00", name: "HQ", zone: "VICE BEACH HQ", x: 50, y: 20 },
  { id: "act1", code: "01", name: "SYSTEMS", zone: "SERVER DOCKS", x: 76, y: 36 },
  { id: "act2", code: "02", name: "HEISTS", zone: "HEIST BOARD", x: 72, y: 66 },
  { id: "act3", code: "03", name: "RAP SHEET", zone: "DOWNTOWN OPS", x: 30, y: 74 },
  { id: "act4", code: "04", name: "CREED", zone: "NEON STRIP", x: 22, y: 44 },
  { id: "contact", code: "05", name: "SAFEHOUSE", zone: "SAFEHOUSE COMMS", x: 50, y: 52 },
];

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [wantedLevel, setWantedLevel] = useState(1);
  const [respect, setRespect] = useState(1250);
  const [activeDistrict, setActiveDistrict] = useState<DistrictId>("top");
  const [wheelOpen, setWheelOpen] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(false);
  const [overdriveMode, setOverdriveMode] = useState(false);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [toast, setToast] = useState<MissionToast | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const cheatBufferRef = useRef("");

  const playTone = useCallback(
    (freqs: number[], duration = 0.09, type: OscillatorType = "triangle") => {
      if (!sfxEnabled || typeof window === "undefined") return;
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }
        freqs.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.07);
          gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.07 + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + i * 0.07);
          osc.stop(ctx.currentTime + i * 0.07 + duration);
        });
      } catch {
        // Ignore audio errors on restricted browsers
      }
    },
    [sfxEnabled]
  );

  const playClick = useCallback(() => {
    playTone([520, 740], 0.06, "square");
  }, [playTone]);

  const toggleSfx = useCallback(() => {
    setSfxEnabled((prev) => !prev);
  }, []);

  const toggleOverdrive = useCallback(() => {
    setOverdriveMode((prev) => !prev);
  }, []);

  const addHeat = useCallback(
    (amount = 1) => {
      setWantedLevel((prev) => Math.min(5, prev + amount));
      playTone([340, 480], 0.08, "sawtooth");
    },
    [playTone]
  );

  const clearHeat = useCallback(() => {
    setWantedLevel(0);
    playTone([440, 330], 0.08, "sine");
  }, [playTone]);

  const addRespect = useCallback((amount: number) => {
    setRespect((prev) => prev + amount);
  }, []);

  const showToast = useCallback(
    (title: string, subtitle: string, reward: string, tone: "gold" | "cyan" | "pink" = "gold") => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      setToast({ id: Date.now(), title, subtitle, reward, tone });
      playTone([392, 523.25, 659.25, 783.99], 0.14, "triangle");

      toastTimerRef.current = setTimeout(() => {
        setToast(null);
      }, 3600);
    },
    [playTone]
  );

  const triggerMission = useCallback(
    (
      id: string,
      title: string,
      subtitle: string,
      reward = "+250 RESPECT",
      tone: "gold" | "cyan" | "pink" = "gold"
    ) => {
      setCompletedMissions((prev) => {
        if (prev.includes(id)) return prev;
        setRespect((r) => r + 250);
        setWantedLevel((w) => Math.min(5, w + 1));
        return [...prev, id];
      });
      showToast(title, subtitle, reward, tone);
    },
    [showToast]
  );

  // Track active district on scroll
  useEffect(() => {
    const ids: DistrictId[] = ["top", "act1", "act2", "act3", "act4", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current: DistrictId = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveDistrict(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcuts: TAB opens Loadout Wheel, ESC closes it, plus GTA Cheat Codes
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setWheelOpen((prev) => !prev);
        return;
      }
      if (e.key === "Tab" && !isTyping) {
        e.preventDefault();
        setWheelOpen((prev) => !prev);
        return;
      }
      if (e.key === "Escape" && wheelOpen) {
        setWheelOpen(false);
        return;
      }

      if (isTyping || e.key.length !== 1) return;

      const nextBuf = (cheatBufferRef.current + e.key.toUpperCase()).slice(-12);
      cheatBufferRef.current = nextBuf;

      if (nextBuf.endsWith("HESOYAM")) {
        cheatBufferRef.current = "";
        setRespect((r) => r + 250000);
        showToast("CHEAT ACTIVATED: HESOYAM", "Max Armor + Bankroll Boosted", "+$250,000", "gold");
      } else if (nextBuf.endsWith("AEZAKMI")) {
        cheatBufferRef.current = "";
        setWantedLevel(0);
        showToast("CHEAT ACTIVATED: AEZAKMI", "Wanted Level Cleared — Never Wanted", "0★ HEAT", "cyan");
      } else if (nextBuf.endsWith("VICE")) {
        cheatBufferRef.current = "";
        setOverdriveMode((prev) => {
          const next = !prev;
          showToast(
            next ? "VICE OVERDRIVE ENGAGED" : "VICE OVERDRIVE OFF",
            next ? "Neon Skyline & Strobe Boost Active" : "Standard Leonida Atmosphere Restored",
            next ? "MAX NEON" : "NORMAL",
            "pink"
          );
          return next;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [wheelOpen, showToast]);

  return (
    <GameContext.Provider
      value={{
        wantedLevel,
        respect,
        activeDistrict,
        wheelOpen,
        sfxEnabled,
        overdriveMode,
        completedMissions,
        toast,
        setWheelOpen,
        toggleSfx,
        toggleOverdrive,
        addHeat,
        clearHeat,
        addRespect,
        triggerMission,
        playClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside GameProvider");
  return ctx;
}
