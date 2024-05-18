"use client"

import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TfiEmail } from 'react-icons/tfi';
import { FooterLinks } from '@/lib/content';

const FooterNav = () => {
    const [openStates, setOpenStates] = useState(new Array(FooterLinks.length).fill(false));
    const [open, setOpen] = useState<boolean>(false)
    // Function to toggle open state for a specific index
    const toggleOpen = (index: number) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };


    return (
        <div>
            {FooterLinks.map((item, index) => (
                <div key={index} className="">
                    <hr />
                    <div onClick={() => toggleOpen(index)} className="uppercase w-full flex py-[15px] items-center justify-between">
                        <h2 className="text-[12px] tracking-[.2em]">{item.title}</h2>
                        <IoIosArrowDown className={openStates[index] ? "rotate-180" : ""} />
                    </div>
                    {openStates[index] &&
                        item.links?.map((link) => (
                            <div key={link.id} className={`flex flex-col `}>
                                {link.title === "Find Store near me" ? (
                                    <p className="text-[10px] pb-2 ">
                                        <span className="underline  cursor-pointer">Find Store near me</span>
                                    </p>
                                ) : link.title === "Whatsapp :" ? (
                                    <p className="text-[10px] my-2">Whatsapp : +<span className="underline">91 6366966283</span></p>
                                ) : (
                                    <p className="py-[4px] my-1 text-[10px] tracking-[0.5px]">{link.title}</p>
                                )}
                            </div>
                        ))
                    }
                </div>
            )
            )
            }

            <hr />
            <div className='uppercase w-full flex py-[15px] items-center justify-between'>
                <h2 className="text-[12px] tracking-[.2em]">Sign up and save</h2>
                <IoIosArrowDown onClick={() => setOpen(!open)} className={` ${open && "rotate-180"}`} />

            </div>
            
            {open &&
                    <>
                        <p className=" text-[12px] mb-[15px] tracking-[0.5px]">Sign Up now and  be the first to know about exclusive offers,lastest fashion trends & style tips!</p>

                        <div className=" flex items-center text-font_color-0 border-b-2  border-font_color-0  w-max">
                            <input type="email" placeholder="Enter your mail" className="py-[10px] pr-[60px] outline-none placeholder:text-font_color-0  placeholder:text-[12px]" />
                            <TfiEmail size={20} />
                        </div>

                        <div className=" flex items-center my-[22px]  text-[20px] gap-x-4">
                            <IoLogoInstagram />
                            <FaFacebook />
                            <FaYoutube />
                            <FaXTwitter />
                            <FaPinterest />
                            <FaLinkedin />
                        </div>
                    </>

                }

        </div>
    )
}

export default FooterNav