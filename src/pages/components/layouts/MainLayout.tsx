import React from 'react'
import Navbar from './Navbar'
import clsx from 'clsx';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout (props: MainLayoutProps) {
  return (
    <>
      {/* <Navbar/> */}
      <div className='z-[0] bg-primary text-white relative overflow-x-hidden'>        
        {props.children}
      </div>
    </>
  )
}
