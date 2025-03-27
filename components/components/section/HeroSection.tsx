/* eslint-disable @next/next/no-img-element */
import ScrollAnimation from "@/components/ScrollAnimation";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-svh z-10">
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

      <div className="absolute bottom-8 right-5 z-30">
        <ScrollAnimation />
      </div>
    </section>
  );
}
