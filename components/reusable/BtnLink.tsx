import Link from 'next/link'
import React from 'react'

const BtnLink = ({link, children}: {link: string, children: any}) => {
  return (
    <Link href={link} className='p-4 px-8 bg-transparent rounded-sm text-center text-neutral-900 font-bold transition-all duration-300 border-2 border-neutral-900
    flex items-center justify-center gap-4
    hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] hover:bg-primary
    active:translate-x-[0px] active:translate-y-[0px] active:shadow-none
    '>{children}</Link>
  )
}

export default BtnLink
