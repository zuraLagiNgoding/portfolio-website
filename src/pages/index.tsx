import React from "react";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Image from "next/image";
import About from "./components/About";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      
      <div className="h-screen w-full relative ">
        <div className="w-full overflow-hidden pb-36 xl:pb-44">
          <div className="flex px-24 2xl:px-28 pt-48 2xl:py-[14.5rem] pb-20">
            <div className="flex flex-col">
              <h1 className="text-6xl 2xl:text-8xl font-semibold">Nice to meet you!<br/>I&#39;m <span className="relative z-[0] before:top-9 2xl:before:top-12 before:w-full before:bg-accent before:z-[-1] before:absolute before:h-10 2xl:before:h-20 before:opacity-75 before:rotate-3 before:content-[''] ">Azis Azyura.</span></h1>
              <p className="text-3xl 2xl:text-4xl font-medium opacity-50 mt-4">Freelancer</p>
            </div>
            <div className="">
              {/* <Image className="absolute right-[-5rem] top-[-5rem] 2xl:right-60 2xl:top-[15rem] 2xl:scale-150 transition duration-500 grayscale blur-[2px] hover:grayscale-0 hover:blur-none" alt="me" src="/me-hd.png" width={800} height={800}/> */}
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
