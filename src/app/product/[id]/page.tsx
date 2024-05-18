"use client"

import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaBagShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import RelatedProduct from '@/components/shared/RelatedProduct';
import { todoStore } from '@/store/productStore';


type Props = {
  params: {
    id: string;
  };
};

const ProductDetails: React.FC<Props> = ({ params }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);

    const ProductStore =  todoStore()

    //  console.log(ProductStore.products)

    const addtoCart = () => {
         console.log("Hello");
         
        if(product){
            ProductStore.addProduct(product)
        }
    }
      

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<Product>(`https://fakestoreapi.com/products/${params.id}`);
      setProduct(res.data);
    };
     

    fetchData();
  }, [params.id]);

  if (!product) {
    return <p>Loading...</p>; // Or any other loading state
  }

  return (
    <section className=' mt-11 px-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image Section */}
        <div className="w-full h-[400px] md:h-[600px] relative">
          <Image fill src={product.image} alt={product.title} className="object-contain absolute" />
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-sm mt-4">Category: {product.category}</p>
          <p className="text-sm">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>

          <p className="text-lg my-2 font-medium">${product.price}</p>
          <p className='text-[16px] font-semibold'>Description</p>
          <p>{product.description}</p>
         
           <Button onClick={addtoCart}  className='py-6 mt-4 w-full flex items-center gap-x-2'> <FaBagShopping size={20}/> Add to Cart </Button>
           <Button  className=' mt-4 bg-gray-500 hover:bg-gray-600 py-6  flex items-center gap-x-2  w-full'><FaHeart size={20}/>Add to Wishlist</Button>

        </div>
      </div>


        <div className=' flex flex-col items-center mt-5 justify-center'>
              <h1 className=' text-[18px]  md:text-2xl font-medium  my-3 md:my-6'> YOU MAY ALSO LIKE</h1>

              <RelatedProduct/>
        </div>
    </section>
  );
};

export default ProductDetails;
