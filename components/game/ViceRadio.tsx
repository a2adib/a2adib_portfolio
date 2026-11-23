"use client";

import { useEffect, useRef, useState } from "react";
import { Radio, SkipForward, Volume2, VolumeX } from "lucide-react";

const STATIONS = [
  { id: "off", name: "RADIO OFF", genre: "SILENT", notes: [] as number[], tempo: 0 },
  {
    id: "vice",
    name: "VICE FM 86.4",
    genre: "SYNTHWAVE",
    notes: [220, 261.63, 329.63, 293.66, 246.94, 329.63, 392.0, 329.63],
    tempo: 360,
  },
  {
    id: "lofi",
    name: "NIGHT OPS FM",
    genre: "LO-FI CODE",
    notes: [174.61, 220, 261.63, 329.63, 196.0, 246.94, 293.66, 349.23],
    tempo: 520,
  },
];

export default function ViceRadio() {
  const [stationIdx, setStationIdx] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stepRef = useRef(0);

  const station = STATIONS[stationIdx];
  const isPlaying = stationIdx > 0;

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!isPlaying) return;

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

      const playStep = () => {
        const notes = station.notes;
        if (!notes.length || ctx.state !== "running") return;
        const freq = notes[stepRef.current % notes.length];
        stepRef.current += 1;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const sub = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = station.id === "vice" ? "sawtooth" : "triangle";
        sub.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        sub.frequency.setValueAtTime(freq / 2, now);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(station.id === "vice" ? 950 : 620, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.032, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + station.tempo / 1000);

        osc.connect(filter);
        sub.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        sub.start(now);
        osc.stop(now + station.tempo / 1000 + 0.04);
        sub.stop(now + station.tempo / 1000 + 0.04);
      };

      playStep();
      timerRef.current = setInterval(playStep, station.tempo);
    } catch {
      // Ignore browser audio autoplay restrictions
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, station]);

  const cycleStation = () => {
    setStationIdx((prev) => (prev + 1) % STATIONS.length);
  };

  const toggleMute = () => {
    setStationIdx((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div
      aria-label="Vice FM Radio Tuner"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 border border-white/15 bg-vice-panel/90 px-3 py-2 shadow-hud-panel backdrop-blur-xl"
    >
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isPlaying ? "Turn off Vice FM" : "Turn on Vice FM"}
        className={`flex h-7 w-7 items-center justify-center rounded-full border transition ${
          isPlaying
            ? "border-vice-pink bg-vice-pink/20 text-vice-pink shadow-neon-pink"
            : "border-white/15 bg-white/5 text-vice-muted hover:text-white"
        }`}
      >
        {isPlaying ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
      </button>

      <div className="leading-tight">
        <p className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white">
          <Radio className={`h-3 w-3 ${isPlaying ? "text-vice-cyan" : "text-vice-dim"}`} />
          <span>{station.name}</span>
        </p>
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-vice-gold">
          {station.genre}
        </p>
      </div>

      {/* Animated Equalizer */}
      <div className="flex h-4 items-end gap-[2px] px-1" aria-hidden="true">
        {[0, 1, 2, 3].map((bar) => (
          <span
            key={bar}
            className={`w-[3px] rounded-t transition-all ${
              isPlaying ? "animate-pulse bg-vice-cyan" : "bg-white/15"
            }`}
            style={{
              height: isPlaying ? `${45 + ((bar * 23) % 55)}%` : "25%",
              animationDelay: `${bar * 140}ms`,
            }}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={cycleStation}
        title="Switch radio station"
        aria-label="Switch radio station"
        className="flex h-7 w-7 items-center justify-center border border-white/10 bg-white/5 text-vice-muted transition hover:border-vice-gold hover:text-vice-gold"
      >
        <SkipForward className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
