import CreateLink from '@/functions/CreateLink'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ServiceLink = ({title, imgSrc}: {title: string, imgSrc: string}) => {
  return (
    <Link href={'/uslugi/' + CreateLink(title)} className="relative w-[25rem] h-64 grid place-items-center group">

      <p className="size-[80%] group-hover:size-full z-20 flex items-center justify-center bg-black/70 text-white text-[1.3rem] font-medium tracking-widest text-center group-hover:p-12 p-2 duration-300 transition-all">{title}</p>
      <div className="absolute text-3xl text-white bottom-12 z-20 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bottom-8">
        <FiArrowUpRight />
      </div>
      <Image src={'/img/' + imgSrc} alt='' width={400} height={400} className='absolute size-full top-0 left-0 object-cover z-[-1]'/>
    </Link>
  )
}

export default ServiceLink