'use client'
import CreateLink from "@/functions/CreateLink";
import { motion } from "framer-motion";
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
    <motion.div whileHover="hover" className="w-full aspect-square relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-primary">
        <h3 className="text-xl mb-2 font-semibold text-white">{title}</h3>
        <p className="text-md font-light text-slate-100">{description}</p>
      </div>
      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10"
        style={{
          backgroundImage: `url(/img/${imgSrc}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Link
        href={'/uslugi/' + CreateLink(title)}
        rel="nofollow"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-primary transition-colors"
      >
        <div className="flex items-center text-lg uppercase">
          <p >więcej</p>
          <FiArrowUpRight  />
        </div>
      </Link>
    </motion.div>
  );
};

export default Card
