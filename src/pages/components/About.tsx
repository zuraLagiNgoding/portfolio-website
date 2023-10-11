import React from 'react'
import { techs, softwares, service } from "@/data/experiences";
import Image from 'next/image';
import { AiFillVideoCamera, AiOutlineGlobal} from 'react-icons/ai';
import { HiPencil } from 'react-icons/hi';
import { FaSchool } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  const fade = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75
      }
    }
  }

  const education = [
    {
      school: "SDN Gondrong 7",
      date: "2012 - 2019",
      link: "https://www.google.co.id/maps/place/SDN+Gondrong+7/@-6.1973383,106.6821257,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f9a39b7a2561:0x21dceb4e47ab6529!8m2!3d-6.1973383!4d106.6847006!16s%2Fg%2F1hm49bjm_?entry=ttu"
    },
    {
      school: "MTS Ta'lim Al-Mubtadi",
      date: "2019 - 2022",
      link: "https://www.google.co.id/maps/place/Mts+Ta'lim+Al-Mubtadi+(yaspita)/@-6.1854095,106.6770202,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f9d862c8ee9b:0xf6bef2f19bea8b88!8m2!3d-6.1854095!4d106.6795951!16s%2Fg%2F11fnbf5j9n?entry=ttu"
    },
    {
      school: "SMKN 4 Tangerang",
      date: "2022 - Now",
      link: "https://www.google.co.id/maps/place/SMKN+4+Tangerang,+Jalan+Veteran,+RT.005%2FRW.002,+Babakan,+Tangerang+City,+Banten/@-6.1854095,106.6770202,17z/data=!4m5!3m4!1s0x2e69f929162547c7:0xbbf35137362e584d!8m2!3d-6.1873334!4d106.6377526?entry=ttu"
    },
  ]

  return (
      <div id="about" className='z-[1] bg-secondary w-full px-36 pt-24 2xl:pt-[3.6rem] pb-20 relative overflow-hidden'>
        <motion.h1 variants={fade} initial={{opacity:0, y:40}} whileInView="animate" viewport={{once:true}} className='transition duration-300 text-5xl font-bold text-center drop-shadow-lightBlue hover:drop-shadow-secondaryLightBlue '>Profile</motion.h1>
        <motion.div variants={fade} initial="initial" whileInView="animate" viewport={{once:true}} className='relative text-xl px-12 py-20 mt-16 mb-8 rounded-2xl border shadow-blue-400 shadow-md'>
        <h1 className='inline-block relative text-3xl font-semibold z-[0] before:top-7 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-1 before:rotate-2 before:content-[""] before:transition before:duration-300 before:hover:translate-y-1.5'>About Me</h1>
          <p>
            I&#39;m a high school student at SMKN 4 Kota Tangerang&#44; freelancing as a Web Developer and UI/UX Designer&#46; I have a keen interest in web development and graphic design&#44; which has grown from my passion for technology and video gaming&#46;
          </p>
          <div className='relative'>
            <h1 className='mt-12 inline-block relative text-3xl font-semibold z-[0] before:top-7 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-1 before:rotate-2 before:content-[""] before:transition before:duration-300 before:hover:translate-y-1.5'>Education</h1>
            <div className='flex gap-8 relative mt-16'>
              {education.map((items, index) => 
              <a key="" href={items.link} className='group basis-1/3'>
                <div className='relative flex flex-col gap-1 items-center border border-transparent hover:border-slate-400 hover:shadow-slate-800 hover:shadow-lg cursor-pointer px-4 pt-7 pb-9 rounded-2xl'>
                  <div className='transition duration-500 fade_ opacity-0 group-hover:translate-y-[-8px] flex absolute w-full h-full p-4 pb-9 items-end justify-center'>
                    <h1 className='text-sm '>View</h1>
                  </div>
                  <FaSchool size={40}/>
                  <hr className='w-[2rem]'/>
                  <h1 className='font-bold text-2xl'>{items.school}</h1>
                  <h1 className='font-normal text-base'>{items.date}</h1>
                </div>
              </a>

              )}              
            </div>
          </div>
        </motion.div>
      </div>
  )
}
