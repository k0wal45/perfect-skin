import CallToBook from '@/components/CallToBook'
import Description from '@/components/Contact/Description'
import Form from '@/components/Contact/Form'
import Experts from '@/components/Experts/Experts'
import Galery from '@/components/Galery/Galery'
import Introduction from '@/components/Introduction/Introduction'
import Map from '@/components/Map'
import Pricing from '@/components/Pricing/Pricing'
import Services from '@/components/Services/Services'
import React from 'react'

const page = () => {
  return (
    <main className="overflow-x-hidden max-w-screen my-24">
      <section className="flex flex-col items-center justify-center gap-12 p-4">
        <div className="flex flex-col-reverse lg:flex-row p-4 mx-auto,">
          <Description />
          <Form />
        </div>
      </section>
      <Map />
      <Introduction />
      <Pricing />
      <CallToBook />
      <Galery />
      <Services />
      <Experts />
    </main>
  )
}

export default page
