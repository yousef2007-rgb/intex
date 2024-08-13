export interface Varient {
  title: string;
  title_ar: string;
  discription: string;
  discription_ar: string;
  imageUrl: string;
  imagesUrls: string[];
}

export interface Category {
  title: string;
  discription: string;
  title_ar: string;
  discription_ar?: string;
  keywords?: string;
  lable: string;
  imageUrl: string;
}

export interface Brand {
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
  imageUrl?: string;
  title: string;
  price: number;
  quantity: number;
}

export interface User {
  username: string;
  email: string;
  password: string;
  phone: string;
  city:
    | "Amman"
    | "Zarqa"
    | "Irbid"
    | "Jerash"
    | "Aqaba"
    | "Ajloun"
    | "Alsalt"
    | "Almafraq"
    | "Altafila"
    | "Alkarek"
    | "Maan"
    | "Madaba"
    | "Alagwar";
  location: string;
  age?: number;
  isAdmin: boolean;
  _id: string;
}
export interface Order {
  _id: string;
  user: User;
  products: Item[];
}

export interface Product {
  title: string;
  discription: string;
  lable: string;
  keywords?: string;
  title_ar: string;
  discription_ar: string;
  imagesUrls: string[];
  online_price: number;
  wholesale_price: number;
  discount: number;
  imageUrl: string;
  category: string | CategoryWithId;
  brand: string | BrandWithId;
  isPublished: boolean;
  isInStock: boolean;
  ageRange: "0-2" | "2-6" | "7-12" | "13-up";
  varients?: Varient[];
  dimensions?: string[];
  similarProducts: string[];
}

export interface ProductWithId extends Product {
  _id: string;
}
export interface BrandWithId extends Brand {
  _id: string;
}
export interface CategoryWithId extends Category {
  _id: string;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type SubmitEvent = React.SyntheticEvent<HTMLFormElement>;
