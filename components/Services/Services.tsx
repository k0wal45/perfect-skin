import React from 'react'
import IconDevider from '../reusable/IconDevider'
import PaperOverlay from '../reusable/PaperOverlay'
import ServiceCard from './ServiceCard'
import { GiCottonFlower } from 'react-icons/gi'

const services = [
  {
    image: 'pedicure.jpg',
    cost: '200zł',
    title: 'Pedicure Podologiczny',
    text: 'Profesjonalna pielęgnacja stóp.',
    link: '/'
  },
  {
    image: 'depilacja.jpg',
    cost: '250zł',
    title: 'Depilacja Laserowa',
    text: 'Trwałe usuwanie owłosienia.',
    link: '/'
  },
  {
    image: 'mezoterapia.jpg',
    cost: '300zł',
    title: 'Mezoterapia Igłowa',
    text: 'Odmładzanie skóry twarzy.',
    link: '/'
  },
  {
    image: 'masaz.jpg',
    cost: '180zł',
    title: 'Masaż Relaksacyjny',
    text: 'Głęboki relaks i odprężenie.',
    link: '/'
  },
  {
    image: 'mikrodermabrazja.jpg',
    cost: '220zł',
    title: 'Mikrodermabrazja',
    text: 'Mechaniczne złuszczanie naskórka.',
    link: '/'
  }
];

const Services = () => {
  return (
    <section className="mx-auto w-full flex flex-col items-center justify-center text-center gap-8 py-24 p-4 relative text-secondary">
      <h3 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px]">
        Usługi w
        <p className="text-primary ">naszym salonie</p>
      </h3>
      <p className="text-lg max-w-4xl text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum iste reprehenderit corrupti vel nemo repellendus nulla dignissimos exercitationem mollitia molestias est et amet fuga perspiciatis ex laborum, earum pariatur ratione blanditiis sint fugit vitae unde! Ducimus voluptates explicabo suscipit ut ex fuga, quia animi repellat enim earum, harum dolore!</p>

      <IconDevider icon={<GiCottonFlower />} />
      <div className="flex flex-wrap items-center justify-center gap-12">

      {
        services.map((service: any, index: number) => (
            <ServiceCard 
              image={service.image}
              cost={service.cost}
              title={service.title}
              text={service.text}
              link={service.link}
              key={index}
            />
        ))
      }
      
      </div>
      <PaperOverlay />
    </section>
  )
}

export default Services
