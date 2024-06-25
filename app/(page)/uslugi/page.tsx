import CallToBook from '@/components/CallToBook'
import Contact from '@/components/Contact/Contact'
import { noto } from '@/components/Fonts'
import Galery from '@/components/Galery/Galery'
import AllServices from '@/components/Services/AllServices'
import PaperOverlay from '@/components/reusable/PaperOverlay'
import React from 'react'

const page = () => {
  return (
    <main className="overflow-x-hidden max-w-screen">
      <section className={`${noto.className} flex flex-col items-center justify-center gap-12 py-32 pt-48 relative text-lg lg:text-xl p-4`}>
        <h1 className='text-5xl lg:text-6xl bg-clip-text'>Nasze Usługi</h1>
        <p className='max-w-lg text-center tracking-widest leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti quis molestias recusandae facilis nesciunt saepe quidem debitis at reiciendis!</p>
        <PaperOverlay />
      </section>
      <AllServices />
      <CallToBook />
      <Galery />
      <Contact />
    </main>
  )
}

export default page
