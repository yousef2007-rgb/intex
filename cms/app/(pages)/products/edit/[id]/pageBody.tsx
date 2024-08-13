"use client"
import { FC, useState } from 'react';
import { Product, Varient } from "@/types/productsTypes"
import ProductDetails from "@/components/productsComponents/addPage/productDetails";
import ProductDetailsAr from "@/components/productsComponents/addPage/productDetailsAr";
import Pricing from '@/components/productsComponents/addPage/pricing';
import Options from '@/components/productsComponents/addPage/options';
import Varients from "@/components/productsComponents/addPage/varients";
import AddIcon from '@/public/assets/icons/addIcon';
import { media as Media } from '@/components/productsComponents/addPage/media';
import { Category, Brand } from '@/types/productsTypes';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import SimilarProduct from '@/components/productsComponents/addPage/similarProducts'

interface Props {
    categories: Category[];
    brands: Brand[];
    product: Product;
}

const ProductForm: FC<Props> = ({ categories, brands, product }) => {
    const router = useRouter();
    const [formData, setFormData] = useState<Product>({
        title: product.title,
        discription: product.discription,
        lable: product.lable,
        keywords: product.keywords,
        title_ar: product.title_ar,
        discription_ar: product.discription_ar,
        imagesUrls: product.imagesUrls,
        online_price: product.online_price,
        wholesale_price: product.wholesale_price,
        discount: product.discount,
        imageUrl: product.imageUrl,
        category: product.category._id,
        brand: product.brand._id,
        isPublished: product.isPublished,
        isInStock: product.isPublished,
        ageRange: product.ageRange,
        varients: product.varients,
        dimensions: product.dimensions,
        similarProducts:product.similarProducts
    });


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (_id: string | undefined) => async (e: any) => {
        e.preventDefault();
        const res = await axios.get("/api/auth/login")
        const token: string = res.data;
        console.log(`${process.env.URL}/api/products/${_id}`)
        const products = await axios.put(`${process.env.URL}/api/products/${_id}`, formData, {
            headers: {
                "x-web-token": token
            }
        })
        if (products) {
            router.push("/products")
        }
    }



    return (
        <form onSubmit={handleFormSubmit(product?._id)} className=" mx-auto [&>*]:outline-none flex-1 flex w-full flex-col">
            <ProductDetails formData={formData} handleInputChange={handleInputChange} />
            <ProductDetailsAr formData={formData} handleInputChange={handleInputChange} />
            <Pricing formData={formData} handleInputChange={handleInputChange} />
            <Options formData={formData} handleInputChange={handleInputChange} setFormData={setFormData} data={{ categories: categories, brands: brands }} />
            <Varients formData={formData} setFormData={setFormData} />
            <Media formData={formData} setFormData={setFormData} defaultImage={`${process.env.URL}/${formData.imageUrl}`} />
            <SimilarProduct formData={formData} handleInputChange={handleInputChange} setFormData={setFormData} data={{ categories: categories, brands: brands }} />

        </form>
    );
};

export default ProductForm;
