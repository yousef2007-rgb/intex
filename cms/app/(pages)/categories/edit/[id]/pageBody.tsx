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

interface Props {
    category: Category;
}

const ProductForm: FC<Props> = ({ category }) => {
    const router = useRouter();
    const [formData, setFormData] = useState<Category>({
        title: category.title,
        discription: category.discription,
        title_ar: category.title_ar,
        discription_ar: category.discription_ar,
        keywords: category.keywords,
        imageUrl: category.imageUrl,
        lable: category.lable
    });


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (_id: string | undefined) => async (e: any) => {
        e.preventDefault();
        const res = await axios.get("/api/auth/login")
        const token: string = res.data;
        axios.put(`${process.env.URL}/api/categories/${_id}`, formData, {
            headers: {
                "x-web-token": token
            }
        }).then(() => router.push("/categories"));

    }

    return (
        <form onSubmit={handleFormSubmit(category?._id)} className=" mx-auto [&>*]:outline-none w-full flex flex-col">
            <ProductDetails formData={formData} handleInputChange={handleInputChange} />
            <ProductDetailsAr formData={formData} handleInputChange={handleInputChange} />
            <Media formData={formData} setFormData={setFormData} defaultImage={`${process.env.URL}/${formData.imageUrl}`} noAdditionalMedia={true}/> 
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                save
            </button>
        </form>
    );
};

export default ProductForm;
