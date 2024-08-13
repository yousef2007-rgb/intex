"use client"
import { useState } from 'react';
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

const ProductForm = (props: { categories: Category[], brands: Brand[] }) => {
    const router = useRouter();
    const [formData, setFormData] = useState<Product>({
        title: '',
        discription: '',
        lable: '',
        keywords: '',
        title_ar: '',
        discription_ar: "",
        imagesUrls: [],
        online_price: 0,
        wholesale_price: 0,
        discount: 0,
        imageUrl: '',
        category: props.categories[0]._id,
        brand: props.brands[0]._id,
        isPublished: true,
        isInStock: true,
        ageRange: '0-2',
        varients: [],
        dimensions: [],
    });


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        const res = await axios.get("/api/auth/login")
        const token: string = res.data;
        axios.post(process.env.URL + "/api/products", formData, {
            headers: {
                "x-web-token": token
            }
        }).then(() => router.push("/products"))
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={handleFormSubmit} className=" mx-auto [&>*]:outline-none w-full flex flex-col">
            <ProductDetails formData={formData} handleInputChange={handleInputChange} />
            <ProductDetailsAr formData={formData} handleInputChange={handleInputChange} />
            <Pricing formData={formData} handleInputChange={handleInputChange} />
            <Options formData={formData} handleInputChange={handleInputChange} setFormData={setFormData} data={{ categories: props.categories, brands: props.brands }} />
            <Varients formData={formData} setFormData={setFormData} />
            <Media formData={formData} setFormData={setFormData} />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default ProductForm;
