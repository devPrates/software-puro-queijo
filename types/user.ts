export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    image: string,
    role: string
}

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    rating: number;
    colors: string[];
}
