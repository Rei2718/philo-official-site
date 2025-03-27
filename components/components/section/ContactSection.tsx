/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full h-svh z-10 bg-[#000000] overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/main4.png"
          alt="Main4"
          className="w-full h-full object-cover md:hidden opacity-80"
        />
        <img
          src="/main4.png"
          alt="Main4"
          className="w-full h-full object-cover hidden md:block opacity-80"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-[#E2E1D2] px-4">
        <h2 className="leading-relaxed text-2xl md:text-3xl lg:text-4xl my-12">
          The Journey Begins
        </h2>
        <p className="leading-relaxed text-sm md:text-base lg:text-lg">
          PHILO!は、知性と冒険が交差する
          <br />
          世界への招待状です。
          <br />
          思考の扉を開き
          <br />
          自己の可能性を再発見するための
          <br />
          究極の体験がここにあります。
          <br />
          革新的なデザインと
          <br />
          深遠なストーリーテリングが
          <br />
          あなたを未知なる世界へと誘うでしょう。
        </p>

        <blockquote className="py-12">
          <p className="max-w-3xl text-md md:text-lg lg:text-xl mb-4 italic">
            - あなたの次なる冒険は、すぐそばにある。-
          </p>
          <footer className="mt-4 text-right">- Ishikawa Ichiro</footer>
        </blockquote>

        {/* Contactボタン */}
        <div>
          <div className="relative inline-flex group">
            <div className="flash_button absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl"></div>
            <Link
              passHref
              href="https://keisho.tech/"
              className="
                text-sm sm:text-base relative inline-flex items-center justify-center
                w-36 sm:w-44 md:w-56 
                h-10 sm:h-11 md:h-12 
                font-bold text-[#dddcc0] border-2 border-[#dddcc0] transition-all duration-200 
                bg-transparent hover:border-gray-800 rounded-full
              "
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}