"use client"
import React, { FC, useState } from 'react'
import { Props } from './propsType';
import AddIcon from '@/public/assets/icons/addIcon';
import { trashIcon as TrashIcon } from '@/public/assets/icons/trashIcon';

const productDetails: FC<Props> = ({ formData, handleInputChange, setFormData, data }) => {
    const [currentDimension, setCurrentDimension] = useState("");

    const handleDimensionChange = (e: any) => {
        setCurrentDimension(e.target.value)
    }

    const handleOldDimensionChange = (index: number) => (e: any) => {
        const newArray = formData.dimensions?.slice();
        newArray?.splice(index, 1, e.target.value)
        if (newArray) {
            setFormData({
                ...formData, dimensions: newArray
            })
        }
    }
    const handleDimensionDelete = (index: number) => (e: any) => {
        e.preventDefault();
        const newArray = formData.dimensions?.slice();
        newArray?.splice(index, 1)
        if (newArray) {
            setFormData({
                ...formData, dimensions: newArray
            })
        }
    }
    const handleAddDimensions = (e: any) => {
        e.preventDefault();
        if (currentDimension != "") {
            setFormData({
                ...formData, dimensions: formData.dimensions ? [...formData.dimensions, currentDimension] : [currentDimension]
            })
            setCurrentDimension("")
        }
    }

    const handleChange = () => {
        setFormData({ ...formData, isPublished: !formData.isPublished })
    };

    const handleInStockChange = () => {
        setFormData({ ...formData, isInStock: !formData.isInStock })
    };
    console.log(formData)

    return (
        <div className="bg-white p-5 my-5 rounded-md shadow-md">
            <h1 className='mb-5 text-gray-700 font-semibold'>Options</h1>

            <label htmlFor="ageRange" className="block text-gray-700 text-sm font-bold mb-2">
                Age Range
            </label>
            <select
                id="ageRange"
                name="ageRange"
                value={formData.ageRange}
                onChange={handleInputChange}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            >
                <option value="0-2">0-2</option>
                <option value="2-6">2-6</option>
                <option value="7-12">7-12</option>
                <option value="13-up">13-up</option>
            </select>


            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                Category
            </label>
            <select
                id="category"
                name="category"
                onChange={handleInputChange}
                value={formData.category}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            >
                {
                    data?.categories.map((category, index) => (
                        <option value={category._id} key={index}>{category.title}</option>
                    ))
                }
            </select>


            <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">
                Brand
            </label>
            <select
                id="brand"
                name="brand"
                onChange={handleInputChange}
                value={formData.brand}
                className="border rounded w-full py-2 px-3 mb-2 outline-none"
            >
                {
                    data?.brands.map((brand, index) => (
                        <option value={brand._id} key={index}>{brand.title}</option>
                    ))
                }
            </select>

            <div className='flex items-center my-5 '>
                <input
                    type="checkbox"
                    className="toggle-checkbox cursor-pointer"
                    checked={formData.isPublished}
                    onChange={handleChange}
                />
                <span
                    className={`toggle-slider ${formData.isPublished ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></span>
                <label className="flex ml-2 items-center space-x-2 cursor-pointer">
                    <span className="block text-gray-700 text-sm font-bold ">Is Published</span>
                </label>
            </div>

            <div className='flex items-center my-5 '>
                <input
                    type="checkbox"
                    className="toggle-checkbox cursor-pointer"
                    checked={formData.isInStock}
                    onChange={handleInStockChange}
                />
                <span
                    className={`toggle-slider ${formData.isInStock ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></span>
                <label className="flex ml-2 items-center space-x-2 cursor-pointer">
                    <span className="block text-gray-700 text-sm font-bold ">Is In Stock</span>
                </label>
            </div>
            <div className='bg-gray-200 p-5 rounded-md'>
                <div className='flex items-center bg-white px-2 py-3 rounded-md'>
                    <label htmlFor='dimensions' className="block text-gray-700 text-sm font-bold ">
                        New Dimension:
                    </label>
                    <input
                        type="text"
                        id="dimensions"
                        name="dimensions"
                        value={currentDimension}
                        onChange={handleDimensionChange}
                        maxLength={920}
                        minLength={1}
                        className="border mx-2 rounded flex-1 w-full py-2 px-3  outline-none"
                    />
                    <button onClick={handleAddDimensions}>
                        <AddIcon />
                    </button>
                </div>
                {formData.dimensions?.map((dimension:string, index:number) => (
                    <div key={index} className='flex items-center my-2 px-2 py-3 rounded-md bg-white'>
                        <label htmlFor='dimensions' className="block text-gray-700 text-sm font-bold ">
                            Dimension {index + 1}:
                        </label>
                        <input
                            type="text"
                            id="dimensions"
                            name="dimensions"
                            value={dimension}
                            onChange={handleOldDimensionChange(index)}
                            required
                            maxLength={920}
                            minLength={1}
                            className="border mx-2 rounded flex-1 py-2 px-3  outline-none"
                        />
                        <button onClick={handleDimensionDelete(index)}>
                            <TrashIcon />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default productDetails;
