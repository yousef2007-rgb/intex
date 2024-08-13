"use client"

import axios from 'axios';
import React, { useState } from 'react';

const FileUploadForm = () => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const handleFileUpload = async (file: any) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8000/api/products/excel/upload', formData);
            alert('File uploaded successfully!');
        } catch (error: any) {
            if (error.response.status == 401) {
                setErrorMessage(error.response.data)
            } else {
                setErrorMessage("something went wrong try again")
            }
        }
    };
    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };


    const handlePhotoUpload = async (files: any) => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i])
        }
        try {
            const response = await axios.post('http://localhost:8000/api/image/images', formData);

            alert('Files uploaded successfully!');
        } catch (error: any) {
            if (error.response.status == 401) {
                setErrorMessage(error.response.data)
            } else {
                setErrorMessage("something went wrong try again")
            }
        }
    };

    const handlePhotoChange = (e: any) => {
        const files = e.target.files;
        if (files.length) {
            handlePhotoUpload(files);
        }
    };

    return (
        <>
            <div className='rounded-md bg-white shadow-md p-5'>
                <h1 className='font-bold'>Uploads</h1>
                <form className='my-5'>
                    <h1 className='my-3 font-bold'>Upload an excel sheet</h1>
                    <input type="file" accept=".xlsx" onChange={handleFileChange} />
                </form>
                <form className='fon'>
                    <h1 className='my-3 font-bold'>Upload images here</h1>
                    <input type="file" accept='image/*' multiple onChange={handlePhotoChange} />
                </form>
            </div>

            {errorMessage != "" ? <div className='w-full p-5 bg-red-300 text-red-500 capitalize rounded-md shadow-md my-2'>{errorMessage}</div> : ""}
        </>
    );
};

export default FileUploadForm;
