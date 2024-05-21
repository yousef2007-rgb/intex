
import { Product, Category, Brand } from "@/types/productsTypes";
import { Varient } from "@/types/productsTypes";
export interface Props {
    formData: Product | Category | Brand;
    setFormData?: any;
    varientData?: Varient;
    setVarient?: any;
    handleInputChange?: any;
    defaultImage?: string
    data?: {
        categories:Category[],
        brands:Brand[]
    }
    noAdditionalMedia?: boolean;
    index?: number;
}
