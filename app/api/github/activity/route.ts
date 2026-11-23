import { NextResponse } from "next/server";
import { personal } from "@/lib/data";

export const revalidate = 1800;

interface RawEvent {
  type: string;
  repo?: { name: string };
  created_at: string;
}

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "a2adib-portfolio",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${personal.githubHandle}/events/public?per_page=10`,
      { headers, next: { revalidate: 1800 } }
    );

    if (!res.ok) {
      return NextResponse.json({
        latestRepo: "yt_automation",
        latestAction: "PUSH",
        latestDate: "2026-11-21",
      });
    }

    const events: RawEvent[] = await res.json();
    const pushEvent = Array.isArray(events)
      ? events.find((e) => e.type === "PushEvent" || e.type === "CreateEvent") || events[0]
      : null;

    if (!pushEvent || !pushEvent.repo?.name) {
      return NextResponse.json({
        latestRepo: "yt_automation",
        latestAction: "PUSH",
        latestDate: "2026-11-21",
      });
    }

    const repoShort = pushEvent.repo.name.split("/")[1] || pushEvent.repo.name;
    return NextResponse.json({
      latestRepo: repoShort,
      latestAction: pushEvent.type === "PushEvent" ? "PUSH" : "UPDATE",
      latestDate: pushEvent.created_at.slice(0, 10),
    });
  } catch {
    return NextResponse.json({
      latestRepo: "yt_automation",
      latestAction: "PUSH",
      latestDate: "2026-11-21",
    });
  }
}
