import { Merriweather } from "next/font/google";

// Serifada usada na apresentação da home (títulos longos e texto corrido).
export const serif = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
