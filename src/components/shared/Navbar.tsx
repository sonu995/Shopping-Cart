import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';
import Cart from './Cart';

const Navbar = () => {
  return (
       <div className=' sticky top-0 z-50 '>
                  <div className="bg-[#000] text-white h-[40px] w-full py-3 md:py-0  items-center justify-center flex">
              <p className=" text-center text-[10px]  flex-wrap md:flex  md:text-[.9em] tracking-[.2em]  text-grey-0">GET FLAT 50% OFF ON SELECT COLLECTION    <br  className=" md:hidden"/>
                   <span className="ml-2 uppercase underline hover:text-green-300 cursor-pointer">Download App</span>
              </p>
        </div>

        <header className='bg-white py-4 shadow-md px-4'>
              <nav className=' max-w-7xl px-4  lg:px-0 mx-auto flex items-center justify-between'>
                         
                           <div className='text-gray-500 hidden md:block'>
                           <CiMenuFries   size={28}/>
                           </div>

                            <Link href="/">
                                  <h1  className=' text-2xl font-medium text-[#000]'>ZATAR</h1>
                            </Link>


                            <div>
                                  <div className=' flex text-md items-center text-gray-500 gap-x-4'>
                                       <Link href={"/login"}>
                                       <CiUser size={28} className=" cursor-pointer"/>
                                       </Link>
                                       <CiHeart    size={28}   className=" cursor-pointer hidden md:block"/>
                                       <Cart/>
                                  </div>
                            </div>
              </nav>
        </header>
       </div>
  )
}

export default Navbar