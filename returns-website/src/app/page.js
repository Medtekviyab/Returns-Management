import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Homepage from '@/pages/Homepage'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Homepage/>
    <Footer/>
   </div>
  )
}
