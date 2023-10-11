import React from 'react'
import { projects } from '@/data/experiences'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Projects() {

  const fade = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: ( index:number ) => {
      return {      
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1 * index,
          duration: 0.5
        }
      }
    }
  }

  return (
    <div className='relative w-full min-h-screen bg-primary px-32 pt-[25rem]'>
        <svg className='absolute left-0 top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#242424" fill-opacity="1" d="M0,192L1440,128L1440,0L0,0Z"></path></svg>
        <div id='project' className='flex flex-col w-full pt-20'>
            <h1 className='transition duration-300 text-5xl font-bold text-center drop-shadow-lightBlue hover:drop-shadow-secondaryLightBlue'>Projects</h1>
            <div className='relative grid grid-cols-4 mt-16 gap-8'>
              {projects.map((items, index) => 
              <>
                <motion.div 
                  className='group bg-cover rounded-2xl col-span-2 bg-third w-full h-[18rem] 2xl:h-[22rem] relative'
                  style={{ backgroundImage: `url(${items.bg})`}}
                  variants={fade}
                  custom={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <h1 className='z-[2] absolute w-full h-full flex justify-center items-center transition duration-300 opacity-0 group-hover:opacity-100 font-semibold text-2xl'>{items.name}</h1>
                  <div 
                    className='absolute transition duration-300 opacity-0 flex justify-center items-center rounded-2xl w-full h-full bg-primary group-hover:opacity-50'                   
                  >
                  </div>
                  <div className='absolute z-[3] w-full h-full p-6 pt-auto transition duration-300 opacity-0 group-hover:opacity-90'>
                    {items.tech.map((items, index) =>
                    <>
                      <Image key={items} className='mr-3 inline-block bottom-0' src={items} alt='tech' width={45} height={45}/>
                    </>
                    )}
                  </div>
                </motion.div>
              </>
              )}
            </div>
        </div>
    </div>
  )
}
