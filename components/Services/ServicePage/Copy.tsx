import BtnLink from "@/components/reusable/BtnLink";
import { client } from "@/sanity/lib/client";

const Copy = async ({data}: any) => {
  
  const EVENTS_QUERY = `*[_type == "klasa" && _id == "${data.typeOfService._ref}"] {
    name
  }`
  ;
  const tag = await client.fetch(EVENTS_QUERY);

  return (
    <div 
      className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:py-48">
      <p className="w-fit rounded-full bg-primary px-4 py-2 uppercase text-white font-medium">
        {tag[0].name}
      </p>
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
        {data.name}
      </h2>
      <p className="text-lg text-indigo-950 mb-4">
        {data.description}
      </p>
      <p className="text-2xl font-bold text-primary whitespace-nowrap flex gap-4 mb-4">Przybliżony koszt: <span className="text-black">{data.cost} zł</span></p>
      <BtnLink link="/kontakt">Zarezeruj wizytę już teraz</BtnLink>
    </div>
  );
};


export default Copy
