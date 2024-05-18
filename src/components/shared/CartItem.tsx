"use client"
import { formatPrice } from '@/lib/utils'
import { todoStore } from '@/store/productStore'
import { Product } from '@/types'
import { ImageIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";



const CartItem = ({ product }: { product: Product }) => {


        const {deleteProduct} = todoStore()
     console.log("product", product)
    
  
  return (
 
    <div className='space-y-3 py-2'>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-center space-x-4'>
          <div className='relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded'>
            {product?.image ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                className='absolute object-cover'
              />
            ) : (
              <div className='flex h-full items-center justify-center bg-secondary'>
                <ImageIcon
                  aria-hidden='true'
                  className='h-4 w-4 text-muted-foreground'
                />
              </div>
            )}
          </div>

          <div className='flex flex-col self-start'>
            <span className='line-clamp-1 text-sm font-medium mb-1'>
              {product.title}
            </span>

            <span className='line-clamp-1 text-xs capitalize text-muted-foreground'>
              {product.category}
            </span>

            <div className='mt-4 text-xs text-muted-foreground'>
              <button
                onClick={()=> deleteProduct(product.id)}
                className='flex items-center gap-0.5 hover:text-red-500'>
                <MdDelete className='w-3 h-4 ' />
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-1 font-medium'>
          <span className='ml-auto line-clamp-1 text-sm'>
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartItem