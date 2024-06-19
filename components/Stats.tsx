import Image from 'next/image'
import React from 'react'

const Stats = () => {

  function HowManyYears(dataObecna: any) {
    
    const dataUrodzenia: any = new Date('2019-09-15');
    const roznicaCzasu = dataObecna - dataUrodzenia;
    const roznicaWiek = new Date(roznicaCzasu).getFullYear() - 1970;
    return roznicaWiek;
}

const currentDate = new Date(); 

  return (
    <section className="w-full relative  bg-primary/80 overflow-hidden flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 text-white lg:px-24 py-24">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center gap-2 font-[800] tracking-widest max-w-52 flex-1">
        <p className="text-3xl">500+</p>
        <p className="text-xl">Zadowolonych Klientów</p>
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center gap-2 font-[800] tracking-widest max-w-52 flex-1">
        <p className="text-3xl">150+</p>
        <p className="text-xl">Zabiegów</p>
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center gap-2 font-[800] tracking-widest max-w-52 flex-1">
        <p className="text-3xl">{HowManyYears(currentDate)}</p>
        <p className="text-xl">Lata na rynku</p>
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center gap-2 font-[800] tracking-widest max-w-52 flex-1">
        <p className="text-3xl">30+</p>
        <p className="text-xl">Certyfikatów</p>
      </div>
      <Image width={1000} height={600} alt='Orchidea' src='/img/orchidea.jpg' className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'/>
    </section>
  )
}

export default Stats
