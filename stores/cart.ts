interface Cart {
    id: string,
    menuId: number, 
    qty: number
}

export const useCartStore = defineStore( 'cart', () => {
    const carts = ref<number[]>([0, 2, 4, 5, 6, 8, 9, 10, 11]);

    const addCartItem = (value: number) => {
        carts.value.push(value);
    };

    const removeCartItem = (value: number) => {
        carts.value.slice(value, 1);
    };

    return {
        carts,
        addCartItem,
        removeCartItem,
    };
});
