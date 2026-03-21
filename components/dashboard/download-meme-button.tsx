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
