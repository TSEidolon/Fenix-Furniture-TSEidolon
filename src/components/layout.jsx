import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab'
// import { useSelector } from 'react-redux'

export default function Layout() {
  // const statusTabCart = useSelector(store => store.cart.statusTab)

  return (
    <div className='bg-zinc-200'>
      {/* <main className={` m-auto w-[1200px] max-w-full  p-5 transform transition-transform duration-500 
        ${statusTabCart === false ? "" : "-translate-x-48 "}
      `}></main> */}
      <main className= "m-auto w-[1300px] max-w-full  pt-5 transform transition-transform duration-500" >
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  )
}
