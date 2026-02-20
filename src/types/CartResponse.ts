export type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
}

export type Cart = {
    id: number;
    total: number;
    products: Product[];
}

export type CartResponse = {
    carts: Cart[];
    total: number;
    skip: number;
    limit: number;
}
