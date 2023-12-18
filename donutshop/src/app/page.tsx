import Image from 'next/image'
import Hero from '../app/components/hero'
import Testimonials from './components/testimonials'
export default function Home() {
  return (
   <main>
    <Hero />
    <Testimonials />
   </main> 
  )
}