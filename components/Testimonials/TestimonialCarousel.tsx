'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 600;

export const TestimonialCarousel = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      {testimonials.map((t, idx) => {
        let position = 0;

        if (testimonials.length % 2) {
          position = idx - (testimonials.length + 1) / 2;
        } else {
          position = idx - testimonials.length / 2;
        }

        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: Function;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
        absolute left-1/2 top-1/2 cursor-pointer border-2 border-base rounded-xl flex flex-col items-center justify-center p-4 ${
        isActive ? "z-20 bg-primary shadow-xl" : "z-0 bg-white shadow-none"
      }
      `}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <h3
        className={`text-base sm:text-2xl ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
          isActive ? "text-neutral-100" : "text-neutral-700"
        }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
  );
};

type TestimonialType = {
  tempId: number;
  testimonial: string;
  by: string;
};

const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    testimonial:
      "Bardzo profesjonalna obsługa i miła atmosfera. Polecam!",
    by: "Anna, Chorzów",
  },
  {
    tempId: 1,
    testimonial:
      "Zabiegi wykonywane z pełnym zaangażowaniem. Efekty rewelacyjne.",
    by: "Karolina, Katowice",
  },
  {
    tempId: 2,
    testimonial:
      "Świetne miejsce, bardzo miła obsługa, polecam serdecznie.",
    by: "Marta, Świętochłowice",
  },
  {
    tempId: 3,
    testimonial:
      "Jestem bardzo zadowolona z usług. Profesjonalne podejście.",
    by: "Magda, Bytom",
  },
  {
    tempId: 4,
    testimonial:
      "Polecam! Fachowa obsługa i wspaniałe efekty po zabiegach.",
    by: "Ola, Chorzów",
  },
  {
    tempId: 5,
    testimonial:
      "Salon na najwyższym poziomie, zabiegi przynoszą super efekty.",
    by: "Ewa, Katowice",
  },
  {
    tempId: 6,
    testimonial:
      "Zawsze miła atmosfera i pełen profesjonalizm. Polecam.",
    by: "Ania, Chorzów",
  },
  {
    tempId: 7,
    testimonial:
      "Najlepszy salon kosmetyczny, w którym byłam. Polecam serdecznie.",
    by: "Justyna, Świętochłowice",
  },
  {
    tempId: 8,
    testimonial:
      "Profesjonalne zabiegi, miła obsługa, świetne efekty.",
    by: "Monika, Bytom",
  },
  {
    tempId: 9,
    testimonial:
      "Bardzo przyjemna atmosfera, pełen profesjonalizm. Polecam.",
    by: "Natalia, Chorzów",
  },
  {
    tempId: 10,
    testimonial:
      "Świetny salon, fachowa obsługa, polecam z całego serca.",
    by: "Patrycja, Katowice",
  },
  {
    tempId: 11,
    testimonial:
      "Usługi na najwyższym poziomie, bardzo miła obsługa.",
    by: "Sylwia, Świętochłowice",
  },
  {
    tempId: 12,
    testimonial:
      "Profesjonalne podejście do klienta, zabiegi przynoszą efekty.",
    by: "Dominika, Bytom",
  },
  {
    tempId: 13,
    testimonial:
      "Salon godny polecenia, efekty zabiegów rewelacyjne.",
    by: "Kasia, Chorzów",
  },
  {
    tempId: 14,
    testimonial:
      "Zawsze miło i profesjonalnie, polecam serdecznie.",
    by: "Izabela, Katowice",
  },
  {
    tempId: 15,
    testimonial:
      "Bardzo profesjonalna obsługa, efekty zabiegów świetne.",
    by: "Joanna, Świętochłowice",
  },
  {
    tempId: 16,
    testimonial:
      "Najlepszy salon kosmetyczny, świetne efekty po zabiegach.",
    by: "Aleksandra, Bytom",
  },
  {
    tempId: 17,
    testimonial:
      "Profesjonalizm i miła atmosfera, polecam z czystym sumieniem.",
    by: "Dorota, Chorzów",
  },
  {
    tempId: 18,
    testimonial:
      "Bardzo miła obsługa, zabiegi na najwyższym poziomie.",
    by: "Klaudia, Katowice",
  },
  {
    tempId: 19,
    testimonial:
      "Polecam salon, profesjonalne zabiegi i miła atmosfera.",
    by: "Zuzanna, Świętochłowice",
  }
];