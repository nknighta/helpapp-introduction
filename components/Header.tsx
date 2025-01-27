"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Header() {
  
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="space-x-4">
          <Link href="/" className="text-2xl font-bold text-orange-500">まちなか保健室構想</Link>
        </nav>
        <nav className="space-x-4">
          <Link href="#features" className="text-orange-500 hover:text-orange-500">使い方</Link>
        </nav>
      </div>
      <a href="https://forms.gle/bRVguziCLkWCLTMSA" className='flex justify-center items-center bg-orange-500 text-white text-sm py-1 hover:text-orange-200'>
        アンケートのお願い
      </a>
    </header>
  )
}

