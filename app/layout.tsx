import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/lib/cartContext'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Parousia Coffee — Roasted in Richmond, VA',
  description:
    'Small-batch coffee roasted in Richmond, Virginia. Shop our blends, visit the café, or book our mobile trailer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="font-body bg-off-white antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
