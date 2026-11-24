import { NextResponse } from "next/server";
import { githubReposFallback, personal, type GitHubRepo } from "@/lib/data";

export const revalidate = 3600;

interface RawGitHubRepo {
  name: string;
  html_url: string;
  homepage?: string | null;
  description?: string | null;
  language?: string | null;
  stargazers_count?: number;
  updated_at: string;
  fork?: boolean;
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
      `https://api.github.com/users/${personal.githubHandle}/repos?per_page=100&sort=updated`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ repos: githubReposFallback, source: "fallback" });
    }

    const raw: RawGitHubRepo[] = await res.json();
    if (!Array.isArray(raw)) {
      return NextResponse.json({ repos: githubReposFallback, source: "fallback" });
    }

    const repos: GitHubRepo[] = raw
      .filter((r) => !r.fork)
      .map((r) => ({
        name: r.name,
        html_url: r.html_url,
        homepage: (r.homepage || "").trim(),
        description: (r.description || "").trim(),
        language: (r.language || "Code").trim(),
        stars: r.stargazers_count ?? 0,
        updated_at: r.updated_at,
      }));

    return NextResponse.json({ repos, source: "github" });
  } catch {
    return NextResponse.json({ repos: githubReposFallback, source: "fallback" });
  }
}
