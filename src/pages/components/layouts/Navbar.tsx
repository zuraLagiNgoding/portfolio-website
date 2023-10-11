import React from 'react'
import {  AiFillGithub, AiOutlineInstagram} from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";

export default function Navbar() {
    return (
        <div>
            <div className="text-white z-50 px-32 py-3 bg-primary text-md font-bold flex fixed w-full justify-between items-center shadow-md">
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
            </div>
        </div>
      )
}
