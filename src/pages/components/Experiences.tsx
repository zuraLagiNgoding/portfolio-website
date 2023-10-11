import React from 'react'
import { techs, softwares, service } from "@/data/experiences";
import Image from 'next/image';
import { AiFillVideoCamera, AiOutlineGlobal} from 'react-icons/ai';
import { HiPencil} from 'react-icons/hi';
import { motion, Variants } from 'framer-motion'; 

export default function Experiences() {

  const parent: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 1 } } 
  }

  const draw: Variants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition : {
        duration: 1,
        delay: 4
      }
    }
  }

  const fade = {
    initial: {
      opacity: 0,
      y: -250,
    },
    initial1: {
      opacity: 0,
      y: -50,
    },
    animate: ( index:number ) => {
      return {      
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3 * index,
          duration: 0.5
        }
      }
    },
  }

  return (
      <div id='experience' className='z-[1] bg-secondary w-full px-24 pt-20 2xl:pt-[3.6rem] pb-8 relative overflow-hidden'>
        <h1 className='transition duration-300 text-5xl font-bold text-center drop-shadow-lightBlue hover:drop-shadow-secondaryLightBlue'>Experiences</h1>
        <div className='z-[1] grid grid-cols-3 mt-16'>
          {service.map((items, index) =>           
            <motion.div variants={fade} initial="initial" whileInView="animate" viewport={{ once: true }} custom={index} key="" className='z-[5] mx-auto transition duration-300 shadow-none hover:shadow-lg hover:shadow-sky-900 group relative flex flex-col rounded-2xl w-[21rem] h-[27rem] bg-zinc-700 p-12 justify-center items-center '>
              <div className=' bg-zinc-700 px-16 transition duration-300 group-hover:translate-y-[-5.5rem] absolute flex grow flex-col gap-4 items-center justify-center'>
                <items.icons size="82"/>
                <h1 className='text-2xl font-semibold text-center relative z-[0] before:top-4 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-6 before:opacity-75 before:rotate-3 before:content-[""] whitespace-nowrap'>{items.service}</h1>
              </div>
              <div className='z-[0] transition duration-300 group-hover:translate-y-[3rem] opacity-0 group-hover:opacity-100'>
                <p className=''>{items.description}</p>
              </div>
            </motion.div>
          )}
        </div>
        <motion.div className='absolute left-[-1rem] top-64 w-full'>
          <motion.svg className='scale-125' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><motion.path d="M63.22869873046875,108.52017974853516C98.05679829915366,131.98804092407227,191.62928263346356,245.7399024963379,272.1972961425781,249.3273468017578C352.7653096516927,252.91479110717773,471.44993591308594,140.65769958496094,546.6367797851562,130.0448455810547C621.8236236572266,119.43199157714844,693.8714294433594,176.38265991210938,723.318359375,185.6502227783203" variants={draw} initial="initial" animate="animate" fill="none" stroke-width="25" stroke="hsl(205, 69%, 50%)" stroke-linecap="round"/><defs><linearGradient id="SvgjsLinearGradient1000"><stop stop-color="hsl(205, 69%, 60%)" offset="0"></stop><stop stop-color="hsl(205, 69%, 80%)" offset="1"></stop></linearGradient></defs></motion.svg>
        </motion.div>
        {/* <Image className='left-[-1rem] absolute top-64 scale-125' alt='line' src='llline.svg' width={2000} height={2000}/> */}
        <div className='flex xl:flex-row flex-col justify-between gap-16 mt-44'>
          <div>
            <h1 className='inline-block relative text-3xl font-semibold z-[0] before:top-7 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-1 before:rotate-2 before:content-[""] before:transition before:duration-300 before:hover:translate-y-1.5'>Software</h1>
            <div className='mt-8 grid grid-cols-5 gap-6'>
              {softwares.map((items, index) => 
                <motion.div key="" variants={fade} initial="initial1" whileInView="animate" viewport={{ once: true }} custom={index}>
                  <Image key="" className='transition duration-300 grayscale hover:grayscale-0 hover:scale-110' src={items} alt='tech' width={120} height={120}/>
                </motion.div>
              )}
            </div>
          </div>
          <div>
            <h1 className='inline-block relative text-3xl font-semibold z-[0] before:top-7 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-1 before:rotate-2 before:content-[""] before:transition before:duration-300 before:hover:translate-y-1.5'>Techs</h1>
            <div className='mt-8 grid grid-cols-5 gap-6'>
              {techs.map((items, index) => 
                <motion.div key="" variants={fade} initial="initial1" whileInView="animate" viewport={{ once: true }} custom={index}>
                  <Image key="" className='transition duration-300 grayscale hover:grayscale-0 hover:scale-110' src={items} alt='tech' width={120} height={120}/>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}
