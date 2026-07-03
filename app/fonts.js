import localFont from "next/font/local";
import { Playfair_Display, Inter } from "next/font/google";

// Self-hosted Segoe Print (the brand display face) so headings render
// identically on every OS, not only on Windows machines that ship the font.
export const segoePrint = localFont({
  src: [
    { path: "../fonts/SegoePrint.ttf", weight: "400", style: "normal" },
    { path: "../fonts/SegoePrint-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-segoe",
  display: "swap",
  fallback: ["Segoe Print", "Bradley Hand", "cursive"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
