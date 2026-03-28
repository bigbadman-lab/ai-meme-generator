/**
 * Optional hero background photo (homepage only — see HeroSection).
 * Add a file under `public/` (e.g. `public/marketing/hero-bg.webp`) and set the URL path here.
 * Use WebP or AVIF for smaller files. Target **horizontal pixel count** (width), not a fixed aspect ratio:
 * ~1600–2400px wide is a reasonable balance of sharpness vs file size on large viewports; wider (e.g. 2560px)
 * is fine if the file stays small. The hero is **wide and not very tall**, so `object-cover` crops edges—
 * landscape-leaning art usually fits better than a tall portrait frame (e.g. avoid assuming 1600×2400).
 */
export const HERO_BACKGROUND_IMAGE_SRC: string | null = "/back.jpg";
