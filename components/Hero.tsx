"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('https://helpapp-website.vercel.app/');
  };
  return (
    <section className="w-full bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">くらしやすい街に</h1>
          <p className="text-xl mb-6">くらしやすい街に</p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            onClick={handleButtonClick}>
            つかう
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/helpappicon_rounded.png"
            alt="Awesome Product"
            width={400}
            height={400}
            className="
              rounded-full
              shadow-lg
              mx-auto
              "
          />
        </div>
      </div>
    </section>
  )
}

