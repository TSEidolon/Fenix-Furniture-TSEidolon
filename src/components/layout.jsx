import React from 'react'
import { Outlet } from 'react-router-dom'
import CartTab from './cartTab'




export default function Layout() {




  return (
    <div className='bg-zinc-200 min-h-screen'>
      {/* <main className={` m-auto w-[1200px] max-w-full  p-5 transform transition-transform duration-500 
        ${statusTabCart === false ? "" : "-translate-x-48 "}
      `}></main> */}
      <main className= "m-auto w-[1300px] max-w-full px-10  pt-5 transform transition-transform duration-500 " >

        <Outlet />
      </main>
      <CartTab />
    </div>
  )
}
