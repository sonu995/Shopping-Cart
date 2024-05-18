
import { TfiEmail } from "react-icons/tfi";

import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import FooterNav from "./FooterNav";
import { FooterLinks } from "@/lib/content";


export default async function Footer() {
  // const { collections } = await getCollectionsList(0, 6)
  // const { product_categories } = await getCategoriesList(0, 6)
  
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="border-t mt-2 border-ui-border-base w-full lg:px-[40px] lg:py-[60px]">

      {/* For Large Screen */}
      <div className="hidden lg:flex  justify-start  space-x-12 ">
        {FooterLinks?.map((item, index) => (
          <div key={index} className={`${index === 0 ? "xl:pr-[60px] pl-[22px]" : "pl-[22px]"}`}>
            <h1 className={` lg:text-[14px]  xl:text-[15px]  tracking-[.2em] xl:tracking-[.3em] uppercase mb-[20px] `}>{item.title}</h1>
            {item.links?.map((link) => (
                <div key={link.id} className={`flex flex-col `}>
                {link.title === "Find Store near me" ? (
                  <p className="text-[.79em] xl:text-[.83em] "> 
                    <span className="underline cursor-pointer">Find Store near me</span>
                  </p>
                ) : link.title === "Whatsapp :" ? (
                  <p className="text-[.79em] xl:text-[.83em] my-2">Whatsapp : +<span className="underline">91 6366966283</span></p>
                ) : (
                  <p className="text-[.79em] py-[4px] my-1 xl:text-[13px] tracking-[0.5px] cursor-pointer">{link.title}</p>
                )}
              </div>
            ))}

          </div>
        ))}
      </div>

      <div className="pl-[22px] mt-[30px] hidden lg:block">
             <h1 className=" text-[15px] tracking-[.2em] uppercase text-font_color mb-[20px]">Sign Up and save</h1>
             <p className=" text-[12px] mb-[15px] tracking-[0.5px]">Sign Up now and  be the first to know about exclusive offers,lastest fashion trends & style tips!</p>

             <div className=" flex items-center text-font_color-0 border-b-2  border-font_color-0  w-max">
                  <input type="email" placeholder="Enter your mail"  className="py-[10px] pr-[100px] outline-none placeholder:text-font_color-0  placeholder:text-[12px]" />
                  <TfiEmail size={24} />
             </div>

             <div className=" flex items-center mt-[30px] text-[30px] gap-x-4">
                 <IoLogoInstagram className=" cursor-pointer"/>
                 <FaFacebook className=" cursor-pointer"/>
                 <FaYoutube  className=" cursor-pointer"/>
                 <FaXTwitter  className=" cursor-pointer"/>
                 <FaPinterest   className=" cursor-pointer"/>
                 <FaLinkedin   className=" cursor-pointer"/>
             </div>

      </div>




      {/* For below the medium device */}
       
       <div className=" lg:hidden px-[17px]">
                 <FooterNav/>
       </div>


      <div className=" p-[7.5px] flex  items-center justify-center  flex-col text-[12px]">
                    <span>@ {year} ZATRA</span>
                    <p className=" flex items-center gap-x-[4px] font-semibold">Made in India, for the World <BiWorld/></p>

              </div>
    </footer>
  )
}