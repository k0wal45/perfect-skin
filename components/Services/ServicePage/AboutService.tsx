import { Carousel } from "./Carousel";
import Copy from "./Copy";

export const AboutService = () => {
  return (
    <>
      <section className="relative h-fit">
        <Features 
          service={{
            title: '',
            descriptiopn: '',
          }}
        />
      </section>

    </>
  );
};

const Features = ({service}: any) => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};
