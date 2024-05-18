"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Product } from '@/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const RelatedProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<Product[]>('https://fakestoreapi.com/products');
      setProducts(res.data);
    };

    fetchData();
  }, []);

  return (
    <main className='max-w-8xl  my-8 z-0 px-2 lg:px-10 mx-auto grid grid-cols-2 gap-x-4  md:grid-cols-3'>
      {products?.splice(0,6).map((item) => (
        <Link href={`/product/${item.id}`} key={item.id} className='rounded-sm shadow-lg p-3 relative'>
          <p>
               
          </p>
          <div className='w-full h-[250px] md:h-[300px] relative cursor-pointer'>
            <Image fill src={item.image} alt={item.title} className='object-contain rounded-sm' />
          </div>
          <h2 className='text-[15px] my-1'>{item.title}</h2>
          <p className='text-[13px] font-medium'>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
          <p className='text-[14px] font-medium'>${item.price}</p>

          <Button className=' w-full mt-1'>View</Button>
        </Link>
      ))}
    </main>
  );
};

export default RelatedProduct;
