import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({image, cost, title, text, link}: {image: string, cost: string, title: string, text: string, link: string}) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <Link href={link} className=' size-[22rem] flex items-center justify-center relative rounded-full bg-primary z-10 group'>
        <div className="grid place-items-center p-4 rounded-full text-xl aspect-square font-bold text-white bg-primary absolute top-4 left-4 z-50 shadow-xl group-hover:scale-125 transition-transform duration-300">
          {cost}
        </div>
        <div className="absolute size-[21rem] bg-white rounded-full translate-x-[-4px] translate-y-[-4px] z-10 group-hover:translate-y-[4px] group-hover:translate-x-[4px] transition-transform duration-300 "></div>
        <Image src={'/img/' + image} alt='' width={300} height={300} className='size-[20rem] z-20 rounded-full object-cover'/>
        <div className="absolute top-4 left-4 z-30 w-[20rem] h-[20rem] rounded-full bg-primary/70 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white grid place-items-center " >
          <p className="text-lg">{text}</p>
        </div>
      </Link>
      <h4 className="font-[600] text-2xl text-secondary">{title}</h4>
    </div>
  )
}

export default ServiceCard
