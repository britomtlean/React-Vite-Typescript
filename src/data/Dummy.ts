import type { CartResponse } from '../types/CartResponse';

export class Dummy {
    static getDummy = async (): Promise<CartResponse | null> => {
        try {
            const res = await fetch('https://dummyjson.com/carts');

            if (!res.ok) {
                throw new Error('Erro ao buscar dados');
            }

            return res.json();
        } catch (error) {
            console.log(error);
            return null;
        }
    };
}
