import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoDiscordAlt } from 'react-icons/bi'

export default function Contact() {
  return (
    <div className='relative min-h-screen bg-primary px-32 pt-32 pb-12'>
        <div className='flex w-full px-20 py-16 rounded-2xl shadow-lg shadow-accent'>
          <div className="basis-3/5">
            <p className='text-7xl font-semibold group'>Asking for partner up
              <span className='group-hover:translate-y-1'>&#63;</span>
            </p>
            <p className='mt-4 text-xl'>
              There&#39;s lot of way we can connect.
            </p>
            <div className="text-2xl flex gap-6 mt-12">
              <a href="https://discord.gg/users/gyuuu.#8601">
                <i>
                    <BiLogoDiscordAlt size="32"/>
                </i>
              </a>
              <a href="https://github.com/zuraLagiNgoding">
                <i>
                    <AiFillGithub size="32"/>
                </i>
              </a>
              <a href="">
                <i>
                    <AiOutlineInstagram size="32"/>
                </i>
              </a>
            </div>
          </div>
          <div className="basis-2/5 p-8">
            <form className='flex flex-col gap-6' action="">
              <div className='flex gap-4'>
                <input className='basis-1/2' type="text" />
                <input className='basis-1/2' type="text" />
              </div>
              <textarea rows={6}>

              </textarea>
            </form>
          </div>
        </div>
    </div>
  )
}
