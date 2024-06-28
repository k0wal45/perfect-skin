'use client'
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

export const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
        />
      </div>

    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
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
      className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
    >
      <span className="text-lg text-neutral-600">Feature demo here</span>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-white to-white/0 md:block" />
);

