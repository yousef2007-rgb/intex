"use client"
import { FC, useState } from 'react';
import { Product, Varient } from "@/types/productsTypes"
import ProductDetails from "@/components/productsComponents/addPage/productDetails";
import ProductDetailsAr from "@/components/productsComponents/addPage/productDetailsAr";
import Pricing from '@/components/productsComponents/addPage/pricing';
import Options from '@/components/productsComponents/addPage/options';
import Varients from "@/components/productsComponents/addPage/varients";
import { media as Media } from '@/components/productsComponents/addPage/media';
import { Category, Brand } from '@/types/productsTypes';
import { useRouter } from 'next/navigation';
import axios from 'axios';


const ProductForm: FC = ({}) => {
    const router = useRouter();
    const [formData, setFormData] = useState<Category>({
        title: "",
        discription: "",
        title_ar:"",
        discription_ar: "",
        keywords: "",
        imageUrl: "",
        lable: ""
    });


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        const res = await axios.get("/api/auth/login")
        const token: string = res.data;
        axios.post(`${process.env.URL}/api/categories/`, formData, {
            headers: {
                "x-web-token": token
            }
        }).then(() => router.push("/categories"));
    }

    return (
        <form onSubmit={handleFormSubmit} className=" mx-auto [&>*]:outline-none w-full flex flex-col">
            <ProductDetails formData={formData} handleInputChange={handleInputChange} />
            <ProductDetailsAr formData={formData} handleInputChange={handleInputChange} />
            <Media formData={formData} setFormData={setFormData}  noAdditionalMedia={true}/> 
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                submit
            </button>
        </form>
    );
};

export default ProductForm;
