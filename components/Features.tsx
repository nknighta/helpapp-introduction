import { Shield } from 'lucide-react'

const featureslist = [
  {
    "title": "支援環境の構築",
    "description": "互いに支えあう環境を見えるように、助けられるように。地域全体を通じて助け合えるシステムを構築、可視化することで互いを支えあい、助け合える環境を作り上げる。",
  },
  {
    "title": "緊急時の対応強化",
    "description": "もしものその時、その人に合ったサポートをできるように。緊急時に適した処置、対応をその人に合った処置を確実に、迅速にできるサポートを行えるようにする。",
  },
  {
    "title": "社会の意識向上",
    "description": "目に見えづらい障害、精神的な障害をわかってもらう、支えあえる。目に見えない症状や精神的な障害に対する、周囲の理解を深め、分かり合いと支えあいを行えるような環境を作り上げる。",
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold">まちなか保健室構想</h1>
            <Shield className="w-12 h-12" />
            <p className="text-black-600 text-2xl py-4">
              ハンディキャップを持つ全ての人々が安心してサポートを受けられる社会を構築するため、私たちは「まちなか保健室構想」を提案します。
            </p>
            <p className="text-black-600 text-lg py-4">
              「まちなか保健室構想」では、パニックや急な体調悪化などの緊急時に、周辺の提携先店舗に駆け込んで助けを求められる仕組み、また周囲にいる誰もが困っている人を支援できる仕組みを作ります。
              地域全体で共に助け合う意識を高め、万が一の際には素早く適切な対応ができる体制を整え、緊急時、ひいては日常生活における支え合いを強化します。
              これにより、地域全体の人々が安心して暮らせる包括的なサポート体制を目指しています。
            </p>
          </div>
          <div>
            {featureslist.map((feature, index) => (
              <div key={index} className="flex flex-col border p-8 rounded-lg my-5">
                <h2 className="text-2xl font-bold ">{feature.title}</h2>
                <p className="text-black-600 text-lg py-4 ">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">目標達成に向けて</h1>

        <h2 className="text-2xl font-bold">手段の一つとして<br/> 「助けを求める/助けやすくする」アプリケーションの開発</h2>
        <p className="text-black-600 text-lg py-4">
          緊急時の救助要請、チャット機能、緊急連絡先など
          協賛企業・団体の誘致
          "駆け込み寺”のような施設、仕組み
        </p>
      </div>
    </section>
  )
}

