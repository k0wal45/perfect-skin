import CreateLink from "@/functions/CreateLink";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Card = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: any;
  title: any;
  description: any;
}) => {
  return (
    <div className="w-full aspect-square relative overflow-hidden group">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-primary">
        <h3 className="text-xl mb-2 font-semibold text-white">{title}</h3>
        <p className="text-md font-light text-slate-100">{description}</p>
      </div>

      <Image width={500} height={500} src={`/img/${imgSrc}`} alt='Astetyczne Kosmetyki' className='absolute bottom-0 left-0 object-cover w-full h-full z-20 group-hover:scale-50 group-active:scale-50 transition-transform duration-500 ease-in-out origin-bottom-left' />

      <Link
        href={'/uslugi/' + CreateLink(title)}
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-primary transition-colors"
      >
        <div className="flex items-center text-lg uppercase">
          <p >więcej</p>
          <FiArrowUpRight  />
        </div>
      </Link>
    </div>
  );
};

export default Card
