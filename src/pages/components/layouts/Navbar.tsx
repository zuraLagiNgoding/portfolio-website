import React from 'react'
import {  AiFillGithub, AiOutlineInstagram} from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";

export default function Navbar() {
    return (
        <div>
            <div className="text-white z-50 px-32 py-5 bg-primary text-md font-bold flex fixed w-full justify-between shadow-md">
                <h1 className='text-xl'>azyuraazis.</h1>
                <div className="text-2xl flex gap-6">
                    <i>
                        <BiLogoDiscordAlt size="32"/>
                    </i>
                    <i>
                        <AiFillGithub size="32"/>
                    </i>
                    <i>
                        <AiOutlineInstagram size="32"/>
                    </i>
                </div>
            </div>
        </div>
      )
}
