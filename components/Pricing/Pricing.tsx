'use client'
import React, { useEffect, useState } from 'react'
import { PricingTabs } from './PricingTabs'
import PricingAcordion from './PricingAcordion';
import IconDevider from '../reusable/IconDevider';
import { FaCoins } from 'react-icons/fa';
import { EveryService } from './Data';

function findServiceById(id: any, array: any) {
  const currentPage = array.find((item: any) => item.id === id);

  if (!currentPage) {
    return false
  }

  return currentPage
}

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [servicesData, setServicesData] = useState(EveryService[selectedTab+1])

  useEffect(() => {
    const data = findServiceById(selectedTab, EveryService)
    setServicesData(data)
  }, [selectedTab])

  return (
    <section className="flex flex-col items-center justify-center gap-12 my-20 p-4">
      <h3 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px]">
        Nasze
        <p className="text-primary ">ceny</p>
      </h3>
      <IconDevider icon={<FaCoins />} />
      <p className="text-lg max-w-5xl text-center text-neutral-700">Świadczymy usługi z zakresu kosmetologii pielęgnacyjnej i leczniczej, medycyny estetycznej, podologii, stylizacji brwi oraz pielęgnacji dłoni i stóp. Możesz wykonać u nas zabieg epilacji laserowej oraz usuwania tatuażu. Jesteśmy profesjonalni. Cechuje nas indywidualne podejście do każdego Klienta. Nasi pracownicy to dyplomowani Kosmetolodzy, którzy swój zawód wykonują z ogromnym zaangażowaniem i pasją.</p>
      <PricingTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      
      <PricingAcordion 
        solutions={servicesData.items}
      />
    </section>
  )
}

export default Pricing


// {selectedTab === 1 && <div>Issues Content</div>}

