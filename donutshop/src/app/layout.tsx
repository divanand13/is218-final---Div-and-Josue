import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Header from '../app/components/header'
import Footer from './components/footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TheDonutDen',
  description: 'Sign up now for new holiday deals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script 
            src="https://cdn-cookieyes.com/client_data/2960814cb4db1178488da267/script.js"
            strategy='beforeInteractive'
            />
        <Header />
        <GoogleAnalytics />
        {children}
        <Footer />
        </body>
    </html>
  )
}
