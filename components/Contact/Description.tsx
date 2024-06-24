import classes from './contact.module.css'
import { BsEnvelopeAt } from 'react-icons/bs'
import { FaMapLocationDot } from 'react-icons/fa6'
import { GiRotaryPhone } from 'react-icons/gi'

const Description = () => {
  return (
    <div className={classes.bgSquares + ' flex flex-col gap-8 p-8 items-start justify-around text-white'}>
      {/* item */}
      <div className="flex gap-4">
        <p className="text-7xl">
          <FaMapLocationDot />
        </p>
          <div className="flex flex-col items-start justify-center text-lg">
            <p className="text-2xl mb-2">Adres salonu</p>
            <p>ul. Gałeczki 30 42-321</p>
            <p>Chorzów, Śląsk</p>
          </div>
      </div>
      {/* item */}
      <div className="flex gap-4">
        <p className="text-7xl">
          <GiRotaryPhone />
        </p>
          <div className="flex flex-col items-start justify-center text-lg">
            <p className="text-2xl mb-2">Numer Telefony</p>
            <a href="tel:+48790216665">+48 790 216 665</a>
            <a href="tel:+48790216665">+48 790 216 665</a>
          </div>
      </div>
      {/* item */}
      <div className="flex gap-4">
        <p className="text-7xl">
          <BsEnvelopeAt />

        </p>
          <div className="flex flex-col items-start justify-center text-lg">
            <p className="text-2xl mb-2">Email</p>
            <a href="mailto:mbudzalewicz@gmail.com">mbudzalewicz@gmail.com</a>
            <a href="mailto:mbudzalewicz@gmail.com">mbudzalewicz@gmail.com</a>

          </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <p className="text-3xl">Godziny Otwarcia</p>
        <div className="flex justify-between w-full">
          <p>Pn. - Pt.</p>
          <p className='font-bold'>9:00 - 18:00</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Sobota</p>
          <p className='font-bold'>9:00 - 15:00</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Niedziela</p>
          <p className='font-bold'>Zakmnięte</p>
        </div>
      </div>
    </div>
  )
}

export default Description
