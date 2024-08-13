"use client"
import React, { FC, useState, MouseEvent } from 'react'
import { Props } from './propsType'
import axios from 'axios';
import AddIcon from '@/public/assets/icons/addIcon';
import { trashIcon as TrashIcon } from "@/public/assets/icons/trashIcon";

const media: FC<Props> = ({ formData, setFormData }) => {
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

            setFormData({ ...formData, imagesUrls: formData.imagesUrls ? [...formData.imagesUrls, imageUrl] : [imageUrl] })
            alert("uploaded successfully")
            setSelectedImage(null)
        } catch (err) {
            alert("something went wrong :<")
        }
    }

    const handleImageDelete = (index: number) => (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newArray = formData.imagesUrls?.slice();
        newArray?.splice(index, 1);
        if (newArray) {
            setFormData({ ...formData, imagesUrls: newArray })
        }
    }
    return (
        <div className=" my-5">
            <h1 className='mb-5 text-gray-700 font-semibold'>Additional Media</h1>
            <div className='flex items-center'>
                {selectedImage ? <img src={selectedImage} alt="Uploaded" className='max-w-[100px] rounded-md mr-2' /> : ""}
                <input className="max-w-[100px]" type='file' accept='image/*' onChange={handleImageUpload} />
                {selectedImage ? <button onClick={handleImageUploadReq} className='bg-blue-400 text-white p-2 rounded-md font-semibold ml-auto'>Upload</button> : ""}
            </div>
            <div className='flex flex-wrap'>
                {formData.imagesUrls?.map((imageUrl, index) => (
                    <div className=' rounded-md m-2 relative w-fit bg-gray-100' key={index}>
                        <img className="max-w-[100px] rounded-md" src={`${process.env.URL}/${imageUrl}`} />
                        <button className='ml-auto absolute top-0 right-0' onClick={handleImageDelete(index)}> <TrashIcon /> </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default media;
