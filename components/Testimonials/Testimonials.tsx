import React from 'react'
import IconDevider from '../reusable/IconDevider'
import { TestimonialCarousel } from './TestimonialCarousel'
import { RiSpeakFill } from 'react-icons/ri'

const Testimonials = () => {
  return (
    <section className="mx-auto w-full flex flex-col items-center justify-center text-center gap-8 py-24 relative text-secondary">
      <h3 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px] px-4">
        <p className="text-primary ">Opinie</p>
        naszych klientów
      </h3>
      <IconDevider icon={<RiSpeakFill />} />
      <TestimonialCarousel />
</section>
  )
}

export default Testimonials
