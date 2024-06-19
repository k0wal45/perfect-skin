import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CallToBook = () => {
  return (
    <section className="w-full relative min-h-[25rem]">
      <div className="bg-primary h-full lg: w-full lg:w-2/3 min-w-5xl lg:rounded-r-full flex items-center p-12 lg:pl-0 border-r-[1rem] border-white z-20">
        <div className="bg-white/30 h-full z-10 w-full min-w-5xl rounded-xl lg:rounded-r-full flex flex-col items-center lg:items-start lg:pl-72 justify-center p-8 text-white gap-4 text-center lg:text-start">
        <h5 className="text-5xl font-bold max-w-xl ">Zarezerwuj Swoją Wizytę Już Teraz!</h5>
        <p className="text-xl max-w-xl">Odkryj nasze profesjonalne usługi kosmetyczne w chorzowie i zadbaj o swoje piękno z Perfect Skin. Kliknij poniżej, aby umówić się na wizytę i doświadczyć najwyższej jakości zabiegów w przyjaznej atmosferze. Nie czekaj, Twoje piękno zasługuje na najlepszą pielęgnację!</p>
        <Link href='https://booksy.com/pl-pl/101806_perfect-skin-centrum-kosmetologii_inni_12311_chorzow' className='font-bold tracking-wider text-2xl py-4 px-6 bg-primary hover:bg-pink-700 transition-all duration-300 
        active:translate-x-[-4px] active:translate-y-[-4px] active:shadow-none' >Rezerwuj teraz</Link>
        </div>
      </div>
      <Image width={1200} height={1000} src='/img/masaz.jpg' alt='Masaż' className='absolute top-0 right-0 w-1/2 h-full object-cover z-[-1]' />
    </section>
  )
}

export default CallToBook
