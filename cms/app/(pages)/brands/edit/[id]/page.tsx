import React from 'react'
import PageBody from './pageBody'
import axios from "axios"

const getData = async (_id: string) => {
    const brand = await axios.get(`${process.env.URL}/api/brands/${_id}`)
    return {
        brand: brand.data
    };
}

const page = async ({ params: { id }, }: { params: { id: string } }) => {
    const data = await getData(id);
    console.log(data);
    return (
        <PageBody brand={data.brand} />
    )
}
export default page;
