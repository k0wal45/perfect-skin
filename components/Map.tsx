import React from 'react'
import IconDevider from './reusable/IconDevider'
import { FaMap } from 'react-icons/fa'

const Map = () => {
  return (
    <section className="mx-auto w-full flex flex-col items-center justify-center text-center gap-8 p-4 relative text-secondary">
      <h3 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px]">
        Salon kosmetyczny
        <p className="text-primary ">w Chorzowie</p>
      </h3>

      <IconDevider icon={<FaMap />} />
      <p className="text-lg max-w-4xl text-neutral-700 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum iste reprehenderit corrupti vel nemo repellendus nulla dignissimos exercitationem mollitia molestias est et amet fuga perspiciatis ex laborum, earum pariatur ratione blanditiis sint fugit vitae unde! Ducimus voluptates explicabo suscipit ut ex fuga, quia animi repellat enim earum, harum dolore!</p>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.268450139196!2d18.958022000000003!3d50.286916600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cdd3b0abcc25%3A0xb74ab2a4e0eac1a6!2sPerfect%20Skin%20Centrum%20Kosmetologii%20-%20Salon%20Kosmetyczny!5e0!3m2!1spl!2spl!4v1719484040427!5m2!1spl!2spl" width="1920" height="500"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[27rem]'></iframe>
    </section>
  )
}

export default Map
