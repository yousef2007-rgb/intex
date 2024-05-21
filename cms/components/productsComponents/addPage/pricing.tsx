import React, { FC } from 'react'
import { Props } from './propsType';


const productDetails: FC<Props> = ({ formData, handleInputChange }) => {
    return (
        <div className="bg-white p-5 my-5 rounded-md shadow-md">
            <h1 className='mb-5 text-gray-700 font-semibold'>Pricing</h1>
            <label htmlFor="online_price" className="block text-gray-700 text-sm font-bold mb-2">
                Online Price
            </label>
            <input
                type="number"
                step="any"
                id="online_price"
                name="online_price"
                value={formData.online_price}
                required
                min={0}
                max={10000}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label htmlFor="wholesale_price" className="block text-gray-700 text-sm font-bold mb-2">
                Wholesale Price
            </label>
            <input
                type="number"
                step="any"
                id="wholesale_price"
                name="wholesale_price"
                value={formData.wholesale_price}
                onChange={handleInputChange}
                required
                min={0}
                max={10000}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

            <label htmlFor="discount" className="block text-gray-700 text-sm font-bold mb-2">
                Discount
            </label>
            <input
                type="number"
                step="any"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                required
                min={0}
                max={100}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            />

        </div>
    )
}
export default productDetails;
