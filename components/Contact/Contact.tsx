import React from 'react'
import IconDevider from '../reusable/IconDevider'
import { MdMessage } from 'react-icons/md'
import Description from './Description'
import Form from './Form'

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 my-20 p-4">
      <h3 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px]">
        Skontaktuj się
        <p className="text-primary ">już teraz</p>
      </h3>
      <IconDevider icon={<MdMessage />} />
      <p className="text-lg max-w-4xl text-neutral-700 text-center">Masz jakieś pytania lub nie znalazłeś jakiś potrzebnych ci informacji? Napisz do nas przez formularz poniżej, napisz maila lub zadzwoń</p>

      <div className="flex flex-col-reverse lg:flex-row p-4">
        <Description />
        <Form />
      </div>
    </section>
  )
}

export default Contact
