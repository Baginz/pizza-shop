export interface IPizzas {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export interface ICartPizzas {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    size: number;
    type: string;
}
