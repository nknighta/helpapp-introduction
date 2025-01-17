import Link from 'next/link'
import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-2xl font-bold text-orange-500">まちなか保健室構想</Link>
        </nav>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-orange-500 hover:text-orange-500">使い方</Link>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

