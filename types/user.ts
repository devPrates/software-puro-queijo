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
    category: string;
    image: string;
    description: string;
    sizing: string[];
}
