export interface Varient {
    title: string;
    title_ar: string;
    discription: string;
    discription_ar: string;
    imageUrl: string;
    imagesUrls: string[];
    _id: string;
}

export interface Category {
    _id?: string,
    title: string;
    discription: string;
    title_ar: string;
    discription_ar?: string;
    keywords?: string;
    lable: string;
    imageUrl: string;
}

export interface Brand {
    _id?: string,
    title: string;
    discription: string;
    title_ar: string;
    discription_ar?: string;
    keywords?: string;
    lable: string;
    imageUrl: string;
}

export interface Item {
    product_id: string;
    imageUrl: string;
    title: string;
    price: number;
}

export interface ItemWithQuantity extends Item{
    quantity: number;
}

export interface UserWithoutId {
    username: string;
    email: string;
    password: string;
    phone?: string;
    city: "Amman" | "Zarqa" | "Irbid" | "Jerash" | "Aqaba" | "Ajloun" | "Alsalt" | "Almafraq" | "Altafila" | "Alkarek" | "Maan" | "Madaba" | "Alagwar";
    location: string;
    age: number;
    isAdmin?: boolean;
    repeat_password?:string;
}

export interface User extends UserWithoutId {
    _id: string;
}
export interface Order {
    _id: string;
    user: User;
    products: Item[];
}

export interface Product {
    _id: string;
    title: string;
    discription: string;
    lable: string;
    keywords?: string;
    title_ar: string;
    discription_ar: string;
    imagesUrls?: string[];
    online_price: number;
    wholesale_price: number;
    discount: number;
    imageUrl: string;
    category: Category;
    brand: Brand;
    isPublished: boolean;
    isInStock: boolean;
    ageRange: "0-2" | "2-6" | "7-12" | "13-up";
    varients?: Varient[];
    dimensions?: string[];
}
