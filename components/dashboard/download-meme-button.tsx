"use client";

import { useState } from "react";

type Props = {
  imageUrl: string | null;
  fallbackHref: string;
  downloadFilename: string;
  children: React.ReactNode;
  className?: string;
};

export function DownloadMemeButton({
  imageUrl,
  fallbackHref,
  downloadFilename,
  children,
  className,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleClick(e: React.MouseEvent) {
    if (!imageUrl) {
      return;
    }
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(imageUrl, { mode: "cors" });
      if (!res.ok) throw new Error("Failed to fetch image");
      const buf = await res.arrayBuffer();
      if (buf.byteLength === 0) throw new Error("Empty response");

      const headerType = res.headers.get("content-type")?.split(";")[0]?.trim();
      const inferredType =
        headerType && headerType !== "application/octet-stream"
          ? headerType
          : downloadFilename.toLowerCase().endsWith(".mp4")
            ? "video/mp4"
            : downloadFilename.toLowerCase().endsWith(".png")
              ? "image/png"
              : "";

      const blob = new Blob([buf], {
        type: inferredType || "application/octet-stream",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = downloadFilename;
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(imageUrl, "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
    }
  }

  if (imageUrl) {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={className}
      >
        {loading ? "Downloading…" : children}
      </button>
    );
  }

  return (
    <a href={fallbackHref} download={downloadFilename} className={className}>
      {children}
    </a>
  );
}

type SlideshowSlide = { image_url: string };

/**
 * Fetches each slide PNG and triggers a download (one file per slide, same pattern as DownloadMemeButton).
 * Small delay between saves helps browsers allow multiple downloads from one gesture.
 */
export async function downloadSlideshowPngs(
  slides: SlideshowSlide[],
  baseFilename: string
): Promise<void> {
  for (let i = 0; i < slides.length; i++) {
    const url = slides[i]?.image_url?.trim();
    if (!url) continue;
    try {
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) throw new Error("Failed to fetch image");
      const buf = await res.arrayBuffer();
      if (buf.byteLength === 0) throw new Error("Empty response");
      const headerType = res.headers.get("content-type")?.split(";")[0]?.trim();
      const inferredType =
        headerType && headerType !== "application/octet-stream"
          ? headerType
          : "image/png";
      const blob = new Blob([buf], { type: inferredType });
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = `${baseFilename}-slide-${i + 1}.png`;
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    await new Promise((r) => setTimeout(r, 200));
  }
}

type DownloadSlideshowProps = {
  slides: SlideshowSlide[];
  baseFilename: string;
  className?: string;
};

export function DownloadSlideshowButton({
  slides,
  baseFilename,
  className,
}: DownloadSlideshowProps) {
  const [loading, setLoading] = useState(false);

  return (
    <button
      type="button"
      disabled={loading || !slides.length}
      onClick={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          await downloadSlideshowPngs(slides, baseFilename);
        } finally {
          setLoading(false);
        }
      }}
      className={className}
    >
      {loading ? "Downloading…" : "Download slideshow"}
    </button>
  );
}
