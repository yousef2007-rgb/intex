"use client"
import React, { FC, useState } from 'react'
import { button as Button } from './button'
import { body as Body } from './body'
import { Product } from '@/types/productsTypes'

interface Props{
    products:Product[]
}

export const search:FC<Props> = ({products}) => {
    const [bodyVisability, setBodyVisability] = useState(false);
    return (
        <>
            <Button setVisability={setBodyVisability} />
            {bodyVisability ? <Body products={products} setVisability={setBodyVisability} />:""}
        </>
    )
}
