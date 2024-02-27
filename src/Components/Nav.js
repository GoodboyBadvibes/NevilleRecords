'use client'

import Image from "next/image";
import { React, useState } from "react";
import MenuIcon from "@/Components/MenuIcon";
import style from '../Styles/menuDrop.module.css'
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading2'
import Link from "next/link";

export default function Nav() {

  const [isOpen, setOpen] = useState(false)

  return (
    <>
       <nav className="flex justify-between items-center bg-black relative z-50 ">
        <Link href={'/'} className="cursor-pointer">
          <Image src={'/nevillerecordslogo.png'} alt="logo" width={100} height={100} />
        </Link>
        <div>
           <MenuIcon color={'white'} setOpen={setOpen} isOpen={isOpen}/>
        </div>
       </nav>

       <div onClick={()=>{setOpen(false)}} className= {` bg-black text-white text-center md:font-extrabold font-bold md:text-4xl text-xl 6 z-50 ${isOpen?'animate-menuDropDown  ':'animate-menuPullUp -translate-y-96'} absolute w-full `}>
       {/* <div className={isOpen?style.slideDown:style.slideUp}>  */}
        <div className= {` bg-black text-white text-center md:font-extrabold font-bold md:text-4xl text-xl `}>
        
          <ul className="tracking-widest" >
            <Link href={'/AboutUs'}>
              <li className="pb-10 cursor-pointer tracking-widest">
                About Us
              </li>
            </Link>

            {/* <li className="pb-10 cursor-pointer">
              Artists
            </li> */}

            <Link href={'/Services'}>
              <li className="pb-10 cursor-pointer">
                Services
              </li>
            </Link>

            {/* <li className="pb-10 cursor-pointer">
              Concerts
            </li> */}

            <Link href={'/Contact'}>
              <li className="pb-10 cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>
          </div>
        </div>
        {/* </div> */}

    </>
  );
}
