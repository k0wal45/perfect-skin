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
  const EVENTS_QUERY = `*[_type == "zabieg"] [0] {
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


export async function generateMetadata({ params }: any) {

  const service: any = await getPost(params?.slug)

  return {
    title: service.name,
    description: service.excerpt,
  }
  
}


const page = async ({params}: any) => {

  const service: any = await getPost(params?.slug)

  return (
    <main className='mt-24 lg:mt-0'>

        <AboutService 
          data={service}
        />
      <div className="overflow-x-hidden">
        <Pricing />
        <CallToBook />
        <Experts />
        <Map />
        <Contact /> 
      </div>
    </main>
  )
}

export default page
