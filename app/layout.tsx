import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'まちなか保健室構想',
  description: 'まちなか保健室構想',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">

      <body className={inter.className}>{children}</body>

    </html>
  )
}

