import React from 'react'
import PageBody from './pageBody'
import axios from "axios"
import { Brand, Category } from '@/types/productsTypes';

const getData = async (_id: string) => {
    const categories = await axios.get(`${process.env.URL}/api/categories`);
    const brands = await axios.get(`${process.env.URL}/api/brands`);
    const product = await axios.get(`${process.env.URL}/api/products/${_id}`)
    return {
        categories: categories.data,
        brands: brands.data,
        product: product.data
    };
}

const page = async ({ params: { id }, }: { params: { id: string } }) => {
    const data = await getData(id);
    console.log(data);
    return (
        <PageBody product={data.product} categories={data.categories} brands={data.brands} />
    )
}
export default page;
