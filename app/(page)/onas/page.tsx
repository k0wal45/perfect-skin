import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Galery from '@/components/Galery/Galery'
import Services from '@/components/Services/Services'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="overflow-x-hidden max-w-screen">
      <section className="relative w-full py-32 flex items-center justify-start overflow-hidden bg-white/60">
        <h1 className="w-full lg:w-1/2 grid place-items-center font-bold text-6xl text-black">O Nas</h1>
        <Image width={1920} height={1080} src='/img/astetic.jpg' alt='Astetyczne Kosmetyki' className='absolute w-full object-cover object-center top-0 left-0 h-full z-[-1]' />
      </section>
      <About />
      <Galery />
      <Contact />
      <Services />
    </main>
  )
}

export default page
