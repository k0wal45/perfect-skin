import React from 'react'
import BtnLink from '../reusable/BtnLink'
import Image from 'next/image'
import { noto } from '../Fonts'

const Hero = () => {
  return (
    <section className="flex justify-center items-end min-h-screen max-w-screen relative overflow-hidden border-b-2 border-neutral-200 pb-0 p-4 bg-neutral-200">
			<div className="text-start flex flex-col lg:flex-row lg:pb-0 pt-32 lg:pt-0 justify-center items-center gap-24 px-8">
				<div className="flex flex-col gap-4 max-w-md p-4 lg:p-0">
					<h1 className={`${noto.className} font-bold text-5xl lg:text-6xl`}>Zadbaj o <p className='text-primary my-2'>swoją skórę</p> z Perfect Skin</h1>
					<p className="text-xl" >Zadbaj o swoją skórę z pomocą naszych doświadczonych specjalistów. Oferujemy szeroką gamę zabiegów kosmetycznych dostosowanych do Twoich potrzeb. Zarezerwuj wizytę online i odkryj piękno swojej skóry.</p>
					<BtnLink link="/kontakt">Zarezewuj wizytę</BtnLink> 
				</div>
				<div>
					<Image src='/img/woman.png' alt="Kobieta" width={1920} height={1080} className="h-[30rem] max-w-screen-md lg:h-[90vh] lg:w-auto block w-fit z-30 object-contain object-bottom"/>
				</div>

			</div>

    </section>
  )
}

export default Hero
