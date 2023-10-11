import React from "react";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Image from "next/image";
import About from "./components/About";
import clsx from "clsx";
import { motion } from 'framer-motion'
import {  AiFillHome } from "react-icons/ai";
import gambar from "@/../public/me-hd.png"

export default function Home() {

  const character = {
    initial: {
      opacity: 0,
    },
    animate: ( index:number ) => {
      return {      
        opacity: 1,
        transition: {
          delay: 0.1 * index,
        }
      }
    }
  }

  const word = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: ( index:number ) => {
      return {      
        opacity: 1,
        y: 0,
        transition: {
          delay: 1 * index,
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 5
        }
      }
    }
  }

  return (
    <>
      
      <div id="index" className="h-screen w-full relative ">
        <div className="z-[55] p-4 fixed w-full bottom-0 flex justify-center">
          <div className="flex bg-slate-300 text-primary gap-2 font-semibold rounded-full py-2 px-3 items-center">
            <a href="#index" className="cursor-pointer transition duration-300 group flex gap-2 border border-transparent hover:border-white rounded-full py-1 px-3 overflow-hidden">
                <AiFillHome size="24"/>
                <span className="duration-500 hidden opacity-0 group-hover:block group-hover:opacity-100 transition-opacity">
                  Home
                </span>
            </a>
            <a href="#about" className="transition duration-300 cursor-pointer border border-transparent hover:border-white rounded-full py-1 px-3">About</a>
            <a href="#experience" className="transition duration-300 cursor-pointer border border-transparent hover:border-white rounded-full py-1 px-3">Experience</a>
            <a href="#project" className="transition duration-300 cursor-pointer border border-transparent hover:border-white rounded-full py-1 px-3">Projects</a>
            <a href="#contact" className="transition duration-300 cursor-pointer border border-transparent hover:border-white rounded-full py-1 px-3">Contact</a>
          </div>
        </div>
        <div className="w-full overflow-hidden pb-36 xl:pb-44">
          <div className="flex px-24 2xl:px-28 pt-48 2xl:py-[14.5rem] pb-20">
            <motion.div className="flex flex-col">
              <h1 className="text-6xl 2xl:text-8xl font-semibold">Nice to meet you!<br/>I&#39;m <motion.span initial className="draw relative z-[0] before:top-9 2xl:before:top-12 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-10 2xl:before:h-20 before:opacity-75 before:rotate-3 before:content-[''] ">Azis Azyura.</motion.span></h1>                   
              <motion.p className="text-3xl 2xl:text-4xl font-medium opacity-50 mt-4">
                  Web Developer
              </motion.p>
            </motion.div>
            <div className="">
              <img className="block absolute right-[-5rem] top-[-5rem] 2xl:right-60 2xl:top-[15rem] transition duration-500 grayscale blur-[2px] hover:grayscale-0 hover:blur-none" alt="Me" src="/me-hd.png" width="800" height="800"/>
              {/* <Image className="absolute right-[4rem] top-12 2xl:right-60 2xl:top-[15rem] 2xl:scale-150" alt="me" src="/me-hd.png" width={400} height={400}/> */}
            </div>
          </div>
          <div className="relative mt-4">
            <h1 className="text-accent text-8xl xl:text-[8rem] opacity-50 font-bold absolute whitespace-nowrap rotate-3">MALIKI AZIS AZYURA</h1>
            <div className="left-[-50vw] top-[4.5rem] xl:top-[6.5rem] absolute w-[200vw] h-[10rem] bg-secondary rotate-[4deg]"/>
          </div>
        </div>
        <About/>
        <Experiences/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}
