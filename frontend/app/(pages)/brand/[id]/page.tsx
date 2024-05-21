
import { Product } from '@/types/productsTypes';
import axios from 'axios'
import React from 'react'
import { productCards as ProductCard } from '@/components/product/productCards';

const getProducts = async (id: string) => {
    const products = await axios.get(`${process.env.URL}/api/products/brand/${id}`)

    return products.data;
}

const page = async ({ params }: { params: { id: string } }) => {
    const products: Product[] = await getProducts(params.id)

    return (
        <main className='flex flex-1 flex-col'>
            <h1 className='mx-auto text-3xl mt-5 mb-10 font-normal'>{products[0].brand.title}</h1>
            <div className='flex flex-wrap justify-evenly'>
                {products.map((product: Product, index: number) => (
                    <ProductCard index={index} product={product} />
                ))}
            </div>
        </main>
    )
}

export default page;
