import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { IoMailOutline } from 'react-icons/io5'
import { FcGoogle } from "react-icons/fc";
import { LOGIN_VIEW } from '@/types';

type Props = {
    setCurrentView: (view: LOGIN_VIEW) => void
  }

const Login = ({setCurrentView}:Props) => {
  return (
    <div className=' w-full flex items-center  gap-y-3 justify-center mt-12'>
              <div className="max-w-sm w-full flex flex-col items-center" data-testid="login-page">
              <h1 className="text-large-semi uppercase mb-[15px] tracking-[1px]">LOGIN WITH OTP</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-[10px]">
      Please enter your 10 digit mobile number
      </p>
      
          <div className=' flex flex-col py-4 max-w-4xl w-full'>
          <Input  placeholder='phone number' className='mb-4  py-2 w-full'/>
          <Button className="flex w-full items-center py-2 gap-2"><FcGoogle />Google</Button>
          </div>

          <span className="text-[12px]">A 6 digit OTP will be sent to your phone number</span>
       
       <div className=" flex items-center my-[15px] justify-center  gap-x-2">
            <div className="w-[70px] text-grey-20 h-[2px] bg-grey-30" ></div>
            <p className="text-[15px]">Or Sign-in with</p>
            <div className="w-[70px] text-grey-20  h-[2px] bg-grey-30" ></div>

       </div>

       <div  className=" flex  ">
              <button  onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)} className="w-[160px] p-[12px] rounded-[12px] flex items-center justify-center gap-x-2 border border-grey-40"><IoMailOutline size={20}/>Email</button>
       </div> 
         
              </div>
    </div>
  )
}

export default Login