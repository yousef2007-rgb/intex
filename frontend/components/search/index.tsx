import React from 'react'
import { button as Button } from './button'
import { body as Body } from './body'
import { Product } from '@/types/productsTypes'
import axios from 'axios'
import {search as Search} from "./search";

const getProducts = async () => {
    const res = await axios.get(`${process.env.URL}/api/products`);
    return res.data;
}

export const search = async (props : {}) => {
    const products:Product[] = await getProducts();

    return (
        <>
           <Search products={products}/> 
        </>
    )
}
