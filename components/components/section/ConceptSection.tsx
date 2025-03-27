/* eslint-disable @next/next/no-img-element */
export default function ConceptSection() {
    return (
      <section id="concept" className="relative w-full h-svh z-10 bg-black">
        {/* Key Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/main1.png"
            alt="Main1"
            className="w-full h-full object-cover md:hidden opacity-80"
          />
          <img
            src="/main1.png"
            alt="Main1"
            className="w-full h-full object-cover hidden md:block opacity-80"
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
              PHILO!は「軽やかに、深く考える」
              <br />
              思考ゲーム×ボードゲーム。
              <br />
              変化する世界で自分を問い直し
              <br />
              柔軟な発想を育むことを目的としています。
              <br />
              カードを通じて自由な視点で語り合い
              <br />
              新たな気づきや
              <br />
              インスピレーションを得られるのが特徴です。
              <br />
              シンプルなルールで誰でも楽しめ
              <br />
              コミュニケーションや
              <br />
              相互理解を深めることができます。
              <br />
              「考える楽しさ」を体験できる
              <br />
              新しいコミュニケーションゲームです。
            </p>
          </div>
        </div>
      </section>
    );
  }