'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const PricingAcordion = ({solutions}: {solutions:any}) => {
  const [open, setOpen] = useState(solutions[0].id);
  const title = solutions.find((s: any) => s.id === open)?.title;
  return (
    <motion.section initial={{ opacity: 0 }}
    layout
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} className=" bg-white w-full">
      <div className="w-full  mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center max-w-7xl">
          <div className="flex flex-col flex-wrap gap-4 w-full lg:max-h-[45rem] max-w-xl">
            {solutions.map((q: any) => {
              return (
                <Solution {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
              );
            })}
          </div>
  

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={title}
            className="bg-primary rounded-2xl w-full h-fit p-4 "

          >
            Content
          </motion.div>

      </div>
    </motion.section>
  );
};

const Solution = ({
  title,
  index,
  open,
  setOpen,
}: {
  title: string;
  index: number;
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
}) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer lg:min-w-52"
    >
      <motion.div
        initial={false}
        className="p-4 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-xl font-medium w-fit max-w-52 bg-gradient-to-r from-violet-400 to-primary bg-clip-text"
          >
            {title}
          </motion.p>
        </div>

      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-violet-400 to-primary"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default PricingAcordion;

const solutions = [
  {
    id: 1,
    title: "Individuals",

  },
  {
    id: 2,
    title: "Startups",
  },
  {
    id: 3,
    title: "Enterprise",
  },
  {
    id: 4,
    title: "sadgfsad fasdfasdfasdf asdfas",
  },
  {
    id: 5,
    title: "gdsfgsdf",
  },
  {
    id: 6,
    title: "gdsfgsdf",
  },
  {
    id: 7,
    title: "gdsfgsdf",
  },
  {
    id: 8,
    title: "gdsfgsdf",
  },
  {
    id: 8,
    title: "gdsfgsdf",
  },
  {
    id: 8,
    title: "gdsfgsdf",
  },
  {
    id: 8,
    title: "gdsfgsdf",
  },
];