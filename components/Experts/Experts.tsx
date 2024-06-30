import React from 'react'
import IconDevider from '../reusable/IconDevider'
import { FaPerson } from 'react-icons/fa6'
import Image from 'next/image'

const Experts = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 my-20 p-4">
      <h3 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px]">
        <p className="text-primary ">Nasze</p>
        Ekspertki
      </h3>
      <IconDevider icon={<FaPerson />} />

      <div className="flex flex-wrap items-center justify-center gap-12 text-center">
        {/* Card */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <div  className=' size-[25rem] flex items-center justify-center relative rounded-full bg-primary z-10 group scale-90 lg:scale-100'>
            <div className="absolute size-[24rem] bg-white rounded-full translate-x-[-4px] translate-y-[-4px] z-10 group-hover:translate-y-[4px] group-hover:translate-x-[4px] transition-transform duration-300 "></div>
            <Image src='/img/masaz.jpg' alt='' width={300} height={300} className='size-[23rem] z-20 rounded-full object-cover'/>
          </div>
          <h4 className="font-[600] text-2xl text-secondary">Małgorzata Budzalewicz</h4>
          <p className="font-medium text-xl text-neutral-500">Współwłaścicielka, Kosmetolog, Podolog</p>
          <p className="font-medium text-xl text-neutral-500">+48 790 216 665</p>
          
        </div>
        {/* Card */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <div  className=' size-[25rem] flex items-center justify-center relative rounded-full bg-primary z-10 group scale-90 lg:scale-100'>
            <div className="absolute size-[24rem] bg-white rounded-full translate-x-[-4px] translate-y-[-4px] z-10 group-hover:translate-y-[4px] group-hover:translate-x-[4px] transition-transform duration-300 "></div>
            <Image src='/img/masaz.jpg' alt='' width={300} height={300} className='size-[23rem] z-20 rounded-full object-cover'/>
          </div>
          <h4 className="font-[600] text-2xl text-secondary">Monika Warszewska</h4>
          <p className="font-medium text-xl text-neutral-500">Współwłaścicielka, Kosmetolog, Linergistka</p>
          <p className="font-medium text-xl text-neutral-500">+48 500 033 031</p>
          
        </div>
      
      
    </div>
      
    </section>
  )
}

export default Experts
