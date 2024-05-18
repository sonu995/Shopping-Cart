"use client"

import { FaOpencart } from "react-icons/fa";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";
import {  buttonVariants } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { todoStore } from "@/store/productStore";
import CartItem from "./CartItem";

const Cart = () => {

    const {products} =  todoStore()
    const itemCount = products.length

   
   
     console.log(products);
     

    const [isMounted, setIsMounted] = useState<boolean>(false)

  const cartTotal = products.reduce((acc, item) => acc + item.price, 0);


  const fee = 1;

  const totalPrice = cartTotal + fee;


  return (
    <Sheet>
  <SheetTrigger>
       <div className=" relative">
              <FaOpencart size={27}/>
              <p className=" absolute -top-2 -right-1 flex items-center justify-center bg-[#000]
                     text-white rounded-full w-5 h-5 font-semibold  text-[12px]">{`${itemCount}`}</p>
       </div>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Your Cart items</SheetTitle>
      <Separator/>
    </SheetHeader>
    {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              <ScrollArea>
                {products?.map((product) => (
                  <CartItem
                    product={product}
                    key={product.id}
                  />
                ))}
              </ScrollArea>
            </div>
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
                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href='/cart'
                    className={buttonVariants({
                      className: 'w-full',
                    })}>
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              aria-hidden='true'
              className='relative mb-4 h-60 w-60 text-muted-foreground'>
              <Image
                src='/hippo-empty-cart.png'
                fill
                alt='empty shopping cart hippo'
              />
            </div>
            <div className='text-xl font-semibold'>
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                href='/'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className:
                    'text-sm text-muted-foreground',
                })}>
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
    <SheetFooter>
    {/* <SheetTrigger asChild>
                  <Link
                    href='/cart'
                    className={buttonVariants({
                      className: 'w-full',
                    })}>
                    Continue to Checkout
                  </Link>
                </SheetTrigger> */}
    </SheetFooter>
  </SheetContent>
</Sheet>

  )
}

export default Cart