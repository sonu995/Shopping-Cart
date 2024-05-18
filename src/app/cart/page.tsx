"use client"

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/utils'
import { todoStore } from '@/store/productStore'
import React from 'react'
import Image from "next/image"
const page = () => {

  const {products} =  todoStore()
  const itemCount = products.length
   console.log(products);
   
const cartTotal = products.reduce((acc, item) => acc + item.price, 0);

const fee = 1;

const totalPrice = cartTotal + fee;
  return (
      
       <section className=' flex flex-col gap-x-4 lg:flex-row  mt-8'>
                   <div className='lg:w-2/3 w-full  flex flex-col lg:h-[600px] lg:overflow-y-scroll  item-center'>
                           
                             <h1 className=' underline mb-2 text-xl md:text-2xl font-medium  text-center'>Your Cart Item</h1>

                             <div className="px-8 mt-4">
                                    <div className="flex font-medium items-center  justify-between">
                                         <h1>Item</h1>
                                          <h1>Title</h1>
                                          <h1>Price</h1>
                                    </div>
                                    <Separator/>
                                    
                                    <div className=' gap-y-4'>
                                    {products?.map((item)=> (
                                        <>
                                             <div key={item.id} className=' flex  gap-x-2 items-center justify-between'>
                                             <div>
                                                 <Image src={item.image} alt={item.title} width={80} height={80} className=' object-cover'/>
                                             </div>
                                             <h1 className="max-w-xl flex-wrap flex text-[12px] md:text-[14px] lg:text-[16px]">{item.title}</h1>

                                             <h1 className='text-[12px] md:text-[14px] lg:text-[16px]'>${item.price}</h1>

                                         </div>
                                             <Separator/>
                                        </>
                                    ))}

                                    </div>
                             </div>
                   </div>

                   <div className=' w-full lg:w-1/3 gap-y-5 mb-4 px-4' >
                              <h1 className=' text-xl  mt-3 lg:mt-0 md:text-2xl  font-medium mb-3'>Summary</h1>

                                <p className=' text-[13px] py-2 text-blue-300'>Add gift card or discount code</p>

                                <div className='space-y-4 pr-6'>
              <Separator />
              <div className='space-y-1.5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>
                    Transaction Fee
                  </span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <Separator />
                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <Button className='w-full py-2'>Checkout</Button>
              </div>
            </div>
                   </div>
       </section>
  )
}

export default page