import Image from 'next/image'

const About = () => {
  return (
    <section className="flex flex-col gap-12 items-center justify-center py-12 p-4">
      {/* card */}
      <div className='flex flex-col lg:flex-row lg:even:flex-row-reverse items-center justify-center gap-8'>
        <div className="relative">
          <Image width={700} height={900} alt='Małgorzata Budzalewicz' src='/img/pedicure.jpg' className='h-[30rem] w-fit rounded-t-full' />
          <p className="p-4 bg-primary asbolute bottom-0 left-0 w-full text-2xl font-bold text-white text-center translate-x-8 -translate-y-8">
            Małgorzata Budzalewicz
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 text-lg max-w-xl">
          <h2 className="text-3xl font-bold">Podolog, Kosmetolog</h2>
          <p className="text-2xl text-neutral-400">Akademia sztuk pięknych</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid cupiditate laboriosam laudantium repellat distinctio quibusdam? At assumenda perspiciatis a laborum. Atque aspernatur minus mollitia illo ex accusamus maxime a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid cupiditate laboriosam laudantium repellat distinctio quibusdam? At assumenda perspiciatis a laborum. Atque aspernatur minus mollitia illo ex accusamus maxime a.</p>

        </div>
      </div>
      {/* card */}
      <div className='flex flex-col lg:flex-row lg:even:flex-row-reverse items-center justify-center gap-8'>
        <div className="relative">
          <Image width={700} height={900} alt='Monika Warszewska' src='/img/pedicure.jpg' className='h-[30rem] w-fit rounded-t-full' />
          <p className="p-4 bg-primary asbolute bottom-0 left-0 w-full text-2xl font-bold text-white text-center translate-x-8 -translate-y-8">
            Monika Warszewska
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 text-lg max-w-xl">
          <h2 className="text-3xl font-bold">Podolog, Kosmetolog</h2>
          <p className="text-2xl text-neutral-400">Akademia sztuk pięknych</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid cupiditate laboriosam laudantium repellat distinctio quibusdam? At assumenda perspiciatis a laborum. Atque aspernatur minus mollitia illo ex accusamus maxime a.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid cupiditate laboriosam laudantium repellat distinctio quibusdam? At assumenda perspiciatis a laborum. Atque aspernatur minus mollitia illo ex accusamus maxime a.</p>

        </div>
      </div>
        
    </section>
  )
}

export default About
