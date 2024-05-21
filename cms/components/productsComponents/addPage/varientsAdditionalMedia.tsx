
"use client"
import React, { FC, useState, MouseEvent } from 'react'
import { Props } from './propsType'
import axios from 'axios';
import { trashIcon as TrashIcon } from "@/public/assets/icons/trashIcon";

const media: FC<Props> = ({ formData, index, varientData, setFormData, setVarient, defaultImage }) => {
    const [selectedImage, setSelectedImage] = useState<any | null>(null);
    const [extension, setExtension] = useState(null)
    function readFile(file: any) {
        return new Promise(resolve => {
            let myReader = new FileReader();
            myReader.onloadend = function (e) {
                resolve(myReader.result);
            };
            myReader.readAsDataURL(file);
        });
    };
    const handleImageUpload = async (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
            setExtension(file.name.split(".")[1])
            setSelectedImage(await readFile(file))
        }
    }

    const handleImageUploadReq = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post(process.env.URL + "/api/image", {
                imageData: selectedImage,
                extension: extension
            })
            const imageUrl = res.data;

            if (defaultImage != undefined && index != undefined && formData.varients != undefined) {
                const newArray = formData.varients?.slice();
                newArray?.splice(index, 1, { ...formData.varients[index], imagesUrls: [...formData.varients[index].imagesUrls, imageUrl] })
                setFormData({ ...formData, varients: newArray })
            } else {
                setVarient({ ...varientData, imagesUrls: varientData?.imagesUrls ? [...varientData.imagesUrls, imageUrl] : [imageUrl] })
            }

            alert("uploaded successfully")
            setSelectedImage(null)
        } catch (err) {
            alert("something went wrong :<")
        }
    }

    const handleImageDelete = (i: number) => (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (defaultImage != undefined && formData.varients != undefined && index != undefined) {
            const newArray = formData?.varients[index]?.imagesUrls?.slice();
            newArray?.splice(i, 1);
            const newArray2 = formData?.varients?.slice();
            newArray2?.splice(index, 1, { ...formData.varients[index], imagesUrls: newArray });
            setFormData({ ...formData, varients: newArray2 })
        } else {
            const newArray = varientData?.imagesUrls?.slice();
            newArray?.splice(i, 1);
            setVarient({ ...varientData, imagesUrls: newArray });
        }
    }
    return (
        <div className=" my-5">
            <h1 className='mb-5 text-gray-700 font-semibold'>Additional Media</h1>
            <div className='flex items-center'>
                {selectedImage ? <img src={selectedImage} alt="Uploaded" className='max-w-[100px] rounded-md mr-2' /> : ""}
                <input className="" type='file' accept='image/*' onChange={handleImageUpload} />
                {selectedImage ? <button onClick={handleImageUploadReq} className='bg-blue-400 text-white p-2 rounded-md font-semibold ml-auto'>Upload</button> : ""}
            </div>
            <div className='flex flex-wrap'>
                {defaultImage && index != undefined && formData.varients != undefined ?
                    formData.varients[index]?.imagesUrls?.map((imageUrl: string, i: number) => (
                        <div className=' rounded-md m-2 relative w-fit bg-gray-100' key={i}>
                            <img className="max-w-[100px] rounded-md" src={`${process.env.URL}/${imageUrl}`} />
                            <button className='ml-auto absolute top-0 right-0' onClick={handleImageDelete(i)}> <TrashIcon /> </button>
                        </div>))
                    : varientData?.imagesUrls?.map((imageUrl, index) => (
                        <div className=' rounded-md m-2 relative w-fit bg-gray-100' key={index}>
                            <img className="max-w-[100px] rounded-md" src={`${process.env.URL}/${imageUrl}`} />
                            <button className='ml-auto absolute top-0 right-0' onClick={handleImageDelete(index)}> <TrashIcon /> </button>
                        </div>))}

            </div>

        </div>
    )
}

export default media;
