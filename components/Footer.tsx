import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">まちなか保健室構想</Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="#" className="hover:text-blue-400">個人情報保護規約</Link>
            <Link href="https://chuo.ac.jp/cid" className="hover:text-blue-400">運営者</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 - {new Date().getFullYear()} 中央情報大学校 chuo.ac.jp All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

