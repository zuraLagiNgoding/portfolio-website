import React from 'react'
import { techs, softwares } from "@/data/experiences";
import Image from 'next/image';

export default function Experiences() {
  return (
      <div className='bg-secondary w-full px-24 pt-12 2xl:pt-[3.6rem] pb-8 relative'>
        <h1 className='transition duration-300 text-5xl font-bold text-center drop-shadow-lightBlue hover:drop-shadow-secondaryLightBlue'>Experiences</h1>
        <div className='flex xl:flex-row flex-col justify-between gap-16  mt-16'>
          <div>
            <h1 className='inline-block relative text-3xl font-semibold z-[0] before:top-7 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-1 before:rotate-2 before:content-[""]'>Software</h1>
            <div className='mt-8 grid grid-cols-5 gap-6'>
              {softwares.map(items => 
                <Image className='transition duration-300 grayscale hover:grayscale-0 hover:scale-110' src={items} alt='tech' width={120} height={120}/>
              )}
            </div>
          </div>
          <div>
            <h1 className='inline-block relative text-3xl font-semibold z-[0] before:top-7 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-1 before:rotate-2 before:content-[""]'>Techs</h1>
            <div className='mt-8 grid grid-cols-5 gap-6'>
              {techs.map(items => 
                <Image className='transition duration-300 grayscale hover:grayscale-0 hover:scale-110' src={items} alt='tech' width={120} height={120}/>
              )}
            </div>
          </div>
        </div>
        <svg className='absolute left-0 translate-y-2.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#242424" fill-opacity="1" d="M0,192L1440,128L1440,0L0,0Z"></path></svg>
      </div>
  )
}
