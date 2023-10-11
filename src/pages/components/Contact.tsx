import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoDiscordAlt } from 'react-icons/bi'

export default function Contact() {
  return (
    <div id='contact' className='relative min-h-screen bg-primary px-32 pt-32 pb-12'>
        <div className='flex flex-col w-full px-20 py-16 rounded-2xl shadow-lg shadow-accent'>
          <div className='flex w-full'>
            <div className="basis-3/5">
              <p className='text-7xl font-semibold group'>Asking for partner up
                <span className='group-hover:translate-y-1'>&#63;</span>
              </p>
              <p className='mt-4 text-xl'>
                There&#39;s lot of way we can connect.
              </p>            
            </div>
            <div className="basis-2/5 p-8">
              <form className='flex flex-col gap-6' action="">
                <div className='flex gap-4'>
                  <input className='basis-1/2 rounded-lg' type="text" />
                  <input className='basis-1/2 rounded-lg' type="text" />
                </div>
                <textarea className='resize-none rounded-lg' rows={6}>
                </textarea>
                <input className='cursor-pointer bg-secondary py-2 rounded-lg' type="submit" value="Submit"/>
              </form>
            </div>
          </div>
          <div className="text-2xl flex gap-6 mt-8">            
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
            <a href="https://www.instagram.com/z.zuraaa_/">
              <i>
                  <AiOutlineInstagram size="32"/>
              </i>
            </a>
            <p className='ml-auto text-sm pr-[2.3rem]'>
              Or you can go to my <span><a href='https://www.google.co.id/maps/place/Gg.+Masjid/@-6.1956453,106.6820294,21z/data=!4m7!3m6!1s0x2e69f9a4477f5f1d:0x6f146f4781fc25dd!4b1!8m2!3d-6.1976282!4d106.6817678!16s%2Fg%2F11c1qrd8yg?entry=ttu' className='underline'>place</a></span> 
            </p>
          </div>
        </div>
    </div>
  )
}
