
import IconDevider from "../reusable/IconDevider";
import { FaPhotoFilm } from "react-icons/fa6";
import Card from "./Card";
import { EveryService } from "../Data";

const Galery = () => {

  return (
    <section className="flex flex-col items-center justify-center gap-12 my-20 p-4">
      <h3 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px]">
        Skontaktuj się
        <p className="text-primary ">już teraz</p>
      </h3>
      <IconDevider icon={<FaPhotoFilm />} />
      <p className="text-lg max-w-4xl text-neutral-700 text-center">Masz jakieś pytania lub nie znalazłeś jakiś potrzebnych ci informacji? Napisz do nas przez formularz poniżej, napisz maila lub zadzwoń</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
        {
          EveryService.map((item, index) => (
            <Card
              title={item.items[0].title}
              description={item.items[0].summary}
              imgSrc={item.items[0].imgSrc}
              key={index}
            />
          ))
        }

      </div>
    </section>
  );
};

export default Galery;

