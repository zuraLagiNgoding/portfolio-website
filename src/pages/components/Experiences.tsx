import React from 'react'
import { techs, softwares, service } from "@/data/experiences";
import Image from 'next/image';
import { AiFillVideoCamera, AiOutlineGlobal} from 'react-icons/ai';
import { HiPencil} from 'react-icons/hi';

export default function Experiences() {
  return (
      <div className='z-[1] bg-secondary w-full px-24 pt-12 2xl:pt-[3.6rem] pb-8 relative overflow-hidden'>
        <h1 className='transition duration-300 text-5xl font-bold text-center drop-shadow-lightBlue hover:drop-shadow-secondaryLightBlue'>Experiences</h1>
        <div className='grid grid-cols-3 mt-16'>
          {service.map((items, index) =>           
            <div key="" className='z-[5] transition duration-300 shadow-none hover:shadow-lg hover:shadow-sky-900 group relative flex flex-col rounded-2xl w-[23rem] h-[27rem] bg-zinc-700 p-12 justify-center items-center '>
              <div className='z-[1] bg-zinc-700 px-[5rem] transition duration-300 group-hover:translate-y-[-5.5rem] absolute flex grow flex-col gap-4 items-center justify-center'>
                <items.icons size="82"/>
                <h1 className='text-2xl font-semibold text-center relative z-[0] before:top-4 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-6 before:opacity-75 before:rotate-3 before:content-[""] whitespace-nowrap'>{items.service}</h1>
              </div>
              <div className='z-[0] transition duration-300 group-hover:translate-y-[3rem] opacity-0 group-hover:opacity-100'>
                <p className=''>{items.description}</p>
              </div>
            </div>
          )}
        </div>
        <Image className='left-[-1rem] absolute top-64 scale-125' alt='line' src='llline.svg' width={2000} height={2000}/>
        <div className='flex xl:flex-row flex-col justify-between gap-16 mt-44'>
          <div>
            <h1 className='inline-block relative text-3xl font-semibold z-[0] before:top-7 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-1 before:rotate-2 before:content-[""] before:transition before:duration-300 before:hover:translate-y-1.5'>Software</h1>
            <div className='mt-8 grid grid-cols-5 gap-6'>
              {softwares.map(items => 
                <Image key={items} className='transition duration-300 grayscale hover:grayscale-0 hover:scale-110' src={items} alt='tech' width={120} height={120}/>
              )}
            </div>
          </div>
          <div>
            <h1 className='inline-block relative text-3xl font-semibold z-[0] before:top-7 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-1 before:rotate-2 before:content-[""] before:transition before:duration-300 before:hover:translate-y-1.5'>Techs</h1>
            <div className='mt-8 grid grid-cols-5 gap-6'>
              {techs.map(items => 
                <Image key={items} className='transition duration-300 grayscale hover:grayscale-0 hover:scale-110' src={items} alt='tech' width={120} height={120}/>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}
