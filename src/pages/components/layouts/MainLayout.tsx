import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import clsx from 'clsx';
import {  AiFillGithub, AiOutlineInstagram} from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { useTransform, motion, useScroll, useSpring, useElementScroll, useMotionValue } from 'framer-motion';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout (props: MainLayoutProps) {

  return (
    <>
      <motion.div className="text-white z-50 px-32 py-3 bg-primary text-md font-bold flex fixed w-full justify-between items-center shadow-md">
          <h1 className='text-2xl'>azyuraazis.</h1>
          <div className="text-2xl flex gap-2">
          <a className='rounded-full transition duration-150 border-2 border-transparent hover:border-white p-1' href="https://discord.gg/users/gyuuu.#8601">
              <i>
                  <BiLogoDiscordAlt size="32"/>
              </i>
          </a>
          <a className='rounded-full transition duration-150 border-2 border-transparent hover:border-white p-1' href="https://github.com/zuraLagiNgoding">
              <i>
                  <AiFillGithub size="32"/>
              </i>
          </a>
          <a className='rounded-full transition duration-150 border-2 border-transparent hover:border-white p-1' href="">
              <i>
                  <AiOutlineInstagram size="32"/>
              </i>
          </a>
          </div>
      </motion.div>
      <div className='z-[0] bg-primary text-white relative overflow-x-hidden'>        
        {props.children}
      </div>
    </>
  )
}
