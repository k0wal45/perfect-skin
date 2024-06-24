import React from 'react'
import IconDevider from '../reusable/IconDevider'
import { FaLeaf, FaMedkit, FaSmile, FaSpa } from 'react-icons/fa'
import Link from 'next/link';

const services = [
  {
    icon: <FaSpa />,
    title: 'Zabiegi Spa',
    text: 'Oferujemy relaksacyjne zabiegi spa, które pomogą Ci się odprężyć i zregenerować.',
  },
  {
    icon: <FaMedkit />,
    title: 'Terapia Skóry',
    text: 'Nasze terapie skóry są dostosowane do Twoich indywidualnych potrzeb, zapewniając zdrową i promienną cerę.',
  },
  {
    icon: <FaSmile />,
    title: 'Pielęgnacja Twarzy',
    text: 'Profesjonalne zabiegi pielęgnacyjne twarzy, które poprawią wygląd i kondycję Twojej skóry.',
  },
];

const Introduction = () => {
  return (
    <section className="mx-auto max-w-6xl w-full flex flex-col items-center justify-center text-center gap-8 py-24 p-4 relative text-secondary">
      <h3 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px]">
        Witamy w
        <p className="text-primary ">Perfect Skin</p>
      </h3>
      <IconDevider icon={<FaLeaf />} />
      <p className="font-bold text-xl text-neutral-800">Perfect Skin Centrum Kosmetologii to miejsce, w którym zadbasz o urodę oraz znajdziesz odpowiedź na potrzeby swojej skóry. Pomożemy odpowiednio dobrać pielęgnację domową i odpowiemy na każde Twoje pytanie.</p>
      <p className="text-lg text-neutral-700">Świadczymy usługi z zakresu kosmetologii pielęgnacyjnej i leczniczej, medycyny estetycznej, podologii, stylizacji brwi oraz pielęgnacji dłoni i stóp. Możesz wykonać u nas zabieg epilacji laserowej oraz usuwania tatuażu. Jesteśmy profesjonalni. Cechuje nas indywidualne podejście do każdego Klienta. Nasi pracownicy to dyplomowani Kosmetolodzy, którzy swój zawód wykonują z ogromnym zaangażowaniem i pasją.
</p>

      <div className="flex flex-wrap justify-around gap-4 items-start w-full">
        {
          services.map((service: any, index: number) => (
          <div className="flex flex-col items-center justify-start gap-4 w-72" key={index}>
            <div className="grid place-items-center p-6 rounded-full text-5xl text-white bg-secondary">
              {service.icon}
            </div>
            <p className="text-xl font-bold">{service.title}</p>
            <p className="text-lg text-neutral-600">{service.text}</p>
          </div>
          ))
        }
      </div>

      <div className="flex gap-8">
        <Link
          href="/kontakt"
          className="rounded-sm bg-primary p-4 px-6 font-semibold text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none hover:brightness-90 lg:text-xl"
        >
          Zadzwoń Teraz
        </Link>
        <Link
          href="/uslugi"
          className="rounded-sm bg-secondary p-4 px-6 font-semibold text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none lg:text-xl"
        >
          Sprawdź Ofertę
        </Link>
      </div>


    </section>
  )
}

export default Introduction
