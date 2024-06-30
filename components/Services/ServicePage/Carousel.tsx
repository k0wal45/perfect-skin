'use client'
import { urlForImage } from "@/sanity/lib/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Carousel = ({data}: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full max-w-screen overflow-x-hidden">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        {
          data.galery.map((item: any, index: number) => (
            <CarouselItem
              scrollYProgress={scrollYProgress}
              position={index+1}
              numItems={data.galery.length}
              item={item}
              title={data.name}
              key={index}
            />
          ))
        }
      </div>

    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  item,
  title
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  item: any;
  title: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="w-full rounded-2xl bg-neutral-900 overflow-hidden"
    >
      <Image width={800} height={700} alt={title} src={urlForImage(item).url()} className="w-full h-full object-fit" />
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-white to-white/0 md:block" />
);

