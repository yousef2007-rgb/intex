import React, { FC } from 'react'
import { Props } from './propsType';


const productDetails: FC<Props> = ({ formData, handleInputChange }) => {
    return (
        <div className="bg-white p-5 rounded-md shadow-md w-full ">
            <h1 className='mb-5 text-gray-700 font-semibold'>Product Details</h1>
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Title
            </label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                maxLength={100}

                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label htmlFor="discription" className="block text-gray-700 text-sm font-bold mb-2">
                Description
            </label>
            <textarea
                id="discription"
                name="discription"
                value={formData.discription}
                onChange={handleInputChange}
                required
                maxLength={920}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label htmlFor="lable" className="block text-gray-700 text-sm font-bold mb-2">
                Label
            </label>
            <input
                type="text"
                id="lable"
                name="lable"
                value={formData.lable}
                onChange={handleInputChange}
                required
                maxLength={100}
                minLength={3}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />
            <label htmlFor="keywords" className="block text-gray-700 text-sm font-bold mb-2">
                Keywords
            </label>
            <input
                type="text"
                id="keywords"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                maxLength={920}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />
        </div>
    )
}
export default productDetails;
