/* eslint-disable @next/next/no-img-element */
"use client"; // If you're using app router on Next.js 13+, enable client-side behavior.

import { useRef, useEffect } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function HeroSection() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    /**
     * Parallax Effect on Scroll:
     * Adjust the background position based on scroll
     */
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        // Slightly moves background image vertically
        (backgroundRef.current as HTMLElement).style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-svh z-10"
    >
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
      >
        {/* Key Visual */}
        <div className="absolute inset-0 z-0">
            <img
            src="/main2.png"
            alt="Main1"
            className="w-full h-full object-cover md:hidden"
            />
            <img
            src="/main2.png"
            alt="Main1"
            className="w-full h-full object-cover hidden md:block"
            />
        </div>
      </div>

        {/* Glass Overlay with Text */}
        <div className="relative z-10 w-full h-full flex items-center justify-center animate-fadeInUp">
            <img
                src="/1_left.svg"
                alt="main-text"
                className="flash absolute block md:hidden w-auto h-svh left-0 bottom-0"
            />
            <img
                src="/1_bottom.svg"
                alt="main-text"
                className="absolute hidden md:block w-svw h-auto left-0 bottom-0 px-6"
            />
        </div>

      {/* Decorative Floating Elements (Optional) */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-20 overflow-hidden">
        {/* Example floating, glowing orbs or brand-specific elements */}
        <div className="absolute w-6 h-6 bg-white rounded-full filter blur-xl opacity-30 top-1/3 left-[10%] float-animation"></div>
        <div className="absolute w-8 h-8 bg-white rounded-full filter blur-xl opacity-30 top-1/4 right-[15%] float-animation delay-1000"></div>
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-8 right-5 z-30">
        <ScrollAnimation />
      </div>
    </section>
  );
}
