import React, { FC } from 'react'
import { Props } from './propsType';
import axios from 'axios';


const productDetails: FC<Props> = ({ formData, handleInputChange }) => {
    const translate = (field: string) => async (e: any) => {
        e.preventDefault();
        const message:string = `translate this ${field} to arabic`
        const payload:any = {message:message}
        const res = await axios.post('/api/gpt', payload)
        console.log(res)
    }
    return (
        <div className="bg-white p-5 my-5 rounded-md shadow-md">
            <h1 className='mb-5 text-gray-700 font-semibold'>Product Details (Arabic)</h1>
            <label htmlFor="title_ar" className="block text-gray-700 text-sm font-bold mb-2">
                Title (Arabic)
            </label>
            <input
                type="text"
                id="title_ar"
                name="title_ar"
                value={formData.title_ar}
                onChange={handleInputChange}
                required
                maxLength={100}

                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label htmlFor="discription_ar" className="block text-gray-700 text-sm font-bold mb-2">
                Description (Arabic)
            </label>
            <textarea
                id="discription_ar"
                name="discription_ar"
                value={formData.discription_ar}
                onChange={handleInputChange}
                required
                maxLength={920}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

        </div>
    )
}
export default productDetails;
