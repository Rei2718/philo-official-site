/* eslint-disable @next/next/no-img-element */
import FullscreenMenu from "@/components/MenuButton";
import NoiseFilter from "@/components/NoiseFilter";
import ScrollAnimation from "@/components/ScrollAnimation";
import Link from "next/link";

export default function Main() {
  return (
    <div className="relative w-hull h-svh bg-[#50929C]">

      {/* NoiseFilter */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <NoiseFilter />
      </div>

      {/* FullscreenMenu */}
      <FullscreenMenu />

      {/* MainContents */}
      <section id="home" className="relative w-full h-svh z-10">
        {/* Key Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/main1.png"
            alt="Main1"
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src="/main1.png"
            alt="Main1"
            className="w-full h-full object-cover hidden md:block"
          />
        </div>
        <img
          src="/1_left.svg"
          alt="main-text"
          className="absolute block md:hidden w-auto h-svh left-0 bottom-0"
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

      {/* SecoundContents */}
      <section id="concept" className="relative w-full h-svh z-10">
        {/* Key Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/main2.png"
            alt="Main2"
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src="/main2.png"
            alt="Main2"
            className="w-full h-full object-cover hidden md:block"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20 text-[#F4F3E1]">
          <div className="max-w-11/12 px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Concept</h2>
            <img
              src="/message.svg"
              alt="message"
              className="mb-4 w-80 md:w-96 lg:w-104 mx-auto"
            />
            <p className="leading-relaxed text-sm md:text-base lg:text-lg">
              PHILO!は「軽やかに、深く考える」<br />
              思考ゲーム×ボードゲーム。<br />
              変化する世界で自分を問い直し<br />
              柔軟な発想を育むことを目的としています。<br />
              カードを通じて自由な視点で語り合い<br />
              新たな気づきや<br />
              インスピレーションを得られるのが特徴です。<br />
              シンプルなルールで誰でも楽しめ<br />
              コミュニケーションや<br />
              相互理解を深めることができます。<br />
              「考える楽しさ」を体験できる<br />
              新しいコミュニケーションゲームです。
            </p>
          </div>
        </div>
      </section>

      {/* ThirdContents */}
      <section
        id="products"
        className="relative w-full min-h-screen z-10 bg-gradient-to-br from-[#dddcc0] to-[#e2ba89]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/main3.png"
            alt="Main3"
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src="/main3.png"
            alt="Main3"
            className="w-full h-full object-cover hidden md:block"
          />
        </div>
        <div className="relative z-20 text-gray-900 py-8 md:py-16">
          <div className="max-w-11/12 px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#F4F3E1]">
              Product
            </h2>
            <img
              src="/philoArtWork.png"
              alt="philoArtWork"
              className="mb-8 w-80 md:w-96 lg:w-104 mx-auto"
            />
            <p className="leading-relaxed text-sm md:text-base lg:text-lg mb-8 text-[#F4F3E1]">
              PHILO!は「軽やかに、深く考える」<br />
              思考ゲーム×ボードゲーム。<br />
              変化する世界で自分を問い直し、<br />
              柔軟な発想を育むことを目的としています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-20">
              <div className="bg-[#F4F3E1D3] rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold mb-4">Features</h3>
                <ul className="list-disc list-inside leading-relaxed text-sm md:text-base">
                  <li>シンプルなルールで誰でも楽しめる</li>
                  <li>カードから得られる新たな気づきや発想</li>
                  <li>柔軟なコミュニケーションを促す仕掛け</li>
                  <li>深く考えながらも気軽に盛り上がれる</li>
                  <li>インタラクティブなゲームプレイで毎回新鮮</li>
                </ul>
              </div>

              <div className="bg-[#F4F3E1D3] bg-opacity-80 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold mb-8">How to Play</h3>
                <ol className="list-decimal list-inside leading-relaxed text-sm md:text-base space-y-2">
                  <li>テーマカードを1枚引きます</li>
                  <li>カードに書かれたキーワードについて自由に意見交換</li>
                  <li>深堀りしたい場合は追加カードを引いてさらに議論</li>
                  <li>気づきや面白い発想が生まれたら共有しましょう</li>
                  <li>スペシャルカードでゲームにサプライズをプラス</li>
                </ol>
              </div>
            </div>

            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[#F4F3E1]">
                Gameplay Demo
              </h3>
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-2xl"
                  src="https://www.youtube-nocookie.com/embed/eyoh-Ku9TCI?si=0PtHXs5QSM9duh3L"
                  title="Gameplay Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[#F4F3E1]">
                What Players Say
              </h3>
              <div className="flex flex-col md:flex-row gap-6">
                <blockquote className="bg-[#F4F3E1d3] bg-opacity-80 rounded-lg shadow-2xl p-6 flex-1 transform hover:scale-105 transition-transform">
                  <p className="italic">
                    PHILO!は毎回新しい発見があって、友達とのディスカッションが楽しくなります！
                  </p>
                  <footer className="mt-4 text-right">- Ishikawa Ichiro</footer>
                </blockquote>
                <blockquote className="bg-[#f4f3e1d3] bg-opacity-80 rounded-lg shadow-2xl p-6 flex-1 transform hover:scale-105 transition-transform">
                  <p className="italic">
                    シンプルなのに奥深いゲーム。プレイするたびに新しい戦略が見つかります。
                  </p>
                  <footer className="mt-4 text-right">- Ito Shido</footer>
                </blockquote>
              </div>
            </div>

            <div className="mt-8">
              <div className="relative inline-flex group">
                <div
                  className="flash_button absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl"
                ></div>
                <Link
                  passHref
                  href="https://keisho.tech/"
                  className="
                            text-sm sm:text-base relative inline-flex items-center justify-center
                            w-36 sm:w-44 md:w-56 
                            h-10 sm:h-11 md:h-12 
                            font-bold text-[#F4F3E1] border-2 border-[#F4F3E1] transition-all duration-200 
                            bg-transparent hover:border-gray-800 rounded-full"
                >
                  Show More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ForthContents */}
      <section
        id="contact"
        className="relative w-full h-svh z-10 bg-[#000000] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/main4.png"
            alt="Main4"
            className="w-full h-full object-cover md:hidden opacity-85"
          />
          <img
            src="/main4.png"
            alt="Main"
            className="w-full h-full object-cover hidden md:block"
          />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-[#E2E1D2] px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold my-12">
            The Journey Begins
          </h2>
          <p className="max-w-3xl text-lg md:text-xl lg:text-2xl leading-relaxed">
            PHILO!は、知性と冒険が交差する<br/>
            世界への招待状です。<br/>
            思考の扉を開き<br/>
            自己の可能性を再発見するための<br/>
            究極の体験がここにあります。<br/>
            革新的なデザインと<br/>
            深遠なストーリーテリングが<br/>
            あなたを未知なる世界へと誘うでしょう。
          </p>
          <blockquote className="py-12">
            <p className="max-w-3xl text-md md:text-lg lg:text-xl mb-4 italic">
              - あなたの次なる冒険は、すぐそばにある。-
            </p>
            <footer className="mt-4 text-right">- Ishikawa Ichiro</footer>
          </blockquote>
          <div>

          <div className="relative inline-flex group">
            <div
              className="flash_button absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-xl"
            ></div>
            <Link
              passHref
              href="https://keisho.tech/"
              className="
                  text-sm sm:text-base relative inline-flex items-center justify-center
                  w-36 sm:w-44 md:w-56 
                  h-10 sm:h-11 md:h-12 
                  font-bold text-[#dddcc0] border-2 border-[#dddcc0] transition-all duration-200 
                  bg-transparent hover:border-gray-800 rounded-full"
            >
              Contact us
            </Link>
          </div>

          </div>
        </div>
      </section>
    </div>
  );
}
