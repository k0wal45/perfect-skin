
import { FaLeaf } from 'react-icons/fa'
import IconDevider from '../reusable/IconDevider'
import ServiceLink from './ServiceLink'
import { EveryService } from '../Data'
import { Fragment } from 'react'

const AllServices = () => {
  return (
    <Fragment>
      {
        EveryService.map((service:any) => (
            <section className="flex flex-col items-center justify-center py-12 p-4 gap-12" key={service.id}>
            
              <h2 className="text-5xl flex items-center justify-center flex-wrap font-medium gap-[10px] text-center">
                {service.title}
              </h2>
              <IconDevider icon={<FaLeaf />} />
              <div className="flex flex-wrap items-center justify-center gap-8 w-full lg:px-12">
                {
                  service.items.map((item: any) => (
                    <ServiceLink 
                      title={item.title}
                      imgSrc={item.imgSrc ? item.imgSrc : 'mikrodermabrazja.jpg'}
                      key={item.id}
                    />
                  ))
                }
              </div>
            </section>
          ))
        }
    </Fragment>

  )
}

export default AllServices