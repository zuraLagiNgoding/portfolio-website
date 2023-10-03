import React from 'react'
import Navbar from './Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function (props: MainLayoutProps) {
  return (
    <div className='bg-primary text-white'>
      <Navbar/>
      {props.children}
    </div>
  )
}
