import CallToBook from '@/components/CallToBook'
import Contact from '@/components/Contact/Contact'
import Experts from '@/components/Experts/Experts'
import Map from '@/components/Map'
import Pricing from '@/components/Pricing/Pricing'
import { AboutService } from '@/components/Services/ServicePage/AboutService'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React from 'react'

const getPost = async (slug:string) => {
  const EVENTS_QUERY = `*[_type == "zabieg"] {
    name,
    excerpt,
    cost,
    _id,
    description,
    typeOfService,
    galery,
    }`
  ;
    const event = await client.fetch(EVENTS_QUERY);
    return event
}

const page = async () => {
  return (
    <main className="max-w-screen">
      <section className="relative w-full py-32 flex items-center justify-start overflow-hidden bg-primary/60">
        <h1 className="w-full lg:w-1/2 grid place-items-center font-bold text-6xl text-white">O Nas</h1>
        <Image width={1920} height={1080} src='/img/astetic.jpg' alt='Astetyczne Kosmetyki' className='absolute w-full object-cover object-center top-0 left-0 h-full z-[-1]' />
      </section>
      <AboutService />
      <Pricing />
      <CallToBook />
      <Experts />
      <Map />
      <Contact />
    </main>
  )
}

export default page
