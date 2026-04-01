import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sparsh Yadav | Full Stack Developer",
    short_name: "Sparsh Yadav",
    description: "Full Stack Developer specializing in Next.js, React, MERN stack, and GSAP animations.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
