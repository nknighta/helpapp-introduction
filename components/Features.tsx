import { Shield } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '',
    description: '「まちなか保健室構想」では、パニックや急な体調悪化などの緊急時に、周辺の提携先施設に駆け込んで助けを求められる仕組みを整えます。また、周囲にいる誰もが困っている人を支援できる体制を構築します。地域全体で互いに助け合う意識を高め、万が一の際には迅速かつ適切な対応ができるようにします。これにより、緊急時や日常生活における支え合いを強化し、地域全体の人々が安心して暮らせる包括的なサポート体制を目指します。'
  }
]

export default function Features() {
  return (
    <section id="features" className="w-full bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold  text-center mb-12">まちなか保健室とは?</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-black-600 text-2xl">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

