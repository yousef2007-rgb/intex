"use client"
import { FC, useState } from 'react';
import { Product, Varient } from "@/types/productsTypes"
import ProductDetails from "@/components/productsComponents/addPage/productDetails";
import ProductDetailsAr from "@/components/productsComponents/addPage/productDetailsAr";
import Pricing from '@/components/productsComponents/addPage/pricing';
import Options from '@/components/productsComponents/addPage/options';
import Varients from "@/components/productsComponents/addPage/varients";
import { media as Media } from '@/components/productsComponents/addPage/media';
import { Brand, Brand } from '@/types/productsTypes';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Props {
    brand: Brand;
}

const ProductForm: FC<Props> = ({ brand }) => {
    const router = useRouter();
    const [formData, setFormData] = useState<Brand>({
        title: brand.title,
        discription: brand.discription,
        title_ar: brand.title_ar,
        discription_ar: brand.discription_ar,
        keywords: brand.keywords,
        imageUrl: brand.imageUrl,
        lable: brand.lable
    });


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (_id: string | undefined) => async (e: any) => {
        e.preventDefault();
        const res = await axios.get("/api/auth/login")
        const token: string = res.data;
        axios.put(`${process.env.URL}/api/brands/${_id}`, formData, {
            headers: {
                "x-web-token": token
            }
        }).then(() => router.push("/brands"));

    }

    return (
        <form onSubmit={handleFormSubmit(brand?._id)} className=" mx-auto [&>*]:outline-none w-full flex flex-col">
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
