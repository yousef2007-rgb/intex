"use client"
import { Product, Varient } from '@/types/productsTypes'
import React, { FC, useEffect, useState } from 'react'

interface Props {
    productData: Product;
    varient?: Varient;
}

export const imageSlider: FC<Props> = ({ productData, varient }) => {
    useEffect(() => setCurrentImage(varient ? varient?.imageUrl : productData.imageUrl), [varient, productData])
    const [currentImage, setCurrentImage] = useState<string>
        (varient ? varient?.imageUrl : productData.imageUrl);
    return (
        <div className='sm:w-1/2 w-full flex flex-col sm:mx-2 sm:sticky top-28 h-fit'>
            <div className='flex items-center h-[300px] justify-center bg-white'>
                <img className='rounded-md max-h-full' loading='lazy' src={`${process.env.URL}/${currentImage}`} alt={varient ? varient.title : productData.title} />
            </div>
            <div className='flex justify-evenly my-4'>
                <button className='max-w-[100px] bg-white flex rounded-md mx-2 flex-1' onClick={() => setCurrentImage(varient ? varient.imageUrl : productData.imageUrl)}><img loading='lazy' className=' aspect-square rounded-md object-contain w-full' src={`${process.env.URL}/${varient ? varient.imageUrl : productData.imageUrl}`} /></button>
                {productData.imagesUrls && !varient ? productData.imagesUrls.map((imageUrl: string, index: number) => (
                    <button className='max-w-[100px] flex rounded-md flex-1 mx-2 bg-white' onClick={() => setCurrentImage(imageUrl)} key={index}><img loading='lazy' className=' aspect-square rounded-md object-contain w-full' src={`${process.env.URL}/${imageUrl}`} alt={productData.title} /></button>
                )) : ""}

                {varient?.imagesUrls ? varient.imagesUrls.map((imageUrl: string, index: number) => (
                    <button className='max-w-[100px] flex rounded-md flex-1 mx-2 bg-white' onClick={() => setCurrentImage(imageUrl)} key={index}><img loading='lazy' className=' aspect-square rounded-md object-contain w-full' src={`${process.env.URL}/${imageUrl}`} alt={productData.title} /></button>
                )) : ""}
            </div>
        </div>
    )
}
