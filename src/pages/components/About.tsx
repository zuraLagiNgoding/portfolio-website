import React from 'react'
import { techs, softwares, service } from "@/data/experiences";
import Image from 'next/image';
import { AiFillVideoCamera, AiOutlineGlobal} from 'react-icons/ai';
import { HiPencil} from 'react-icons/hi';

export default function About() {
  return (
      <div className='z-[1] bg-secondary w-full px-36 pt-12 2xl:pt-[3.6rem] pb-8 relative overflow-hidden'>
        <h1 className='transition duration-300 text-5xl font-bold text-center drop-shadow-lightBlue hover:drop-shadow-secondaryLightBlue '>About Me</h1>
        <p className='text-xl px-12 py-20 mt-16 mb-8 rounded-2xl border shadow-blue-400 shadow-md'>I&#39;m a high school student at SMKN 4 Kota Tangerang&#44; freelancing as a Web Developer and UI/UX Designer&#46; I have a keen interest in web development and graphic design&#44; which has grown from my passion for technology and video gaming&#46;</p>
      </div>
  )
}
