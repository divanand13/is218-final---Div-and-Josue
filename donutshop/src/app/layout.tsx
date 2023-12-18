import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Header from '../app/components/header'
import Footer from './components/footer'
import GoogleAnalytics from './components/GoogleAnalytics'
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
        <Header />
        <GoogleAnalytics GA_MEASUREMENT_ID='G-FZ8V692DTG'/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
