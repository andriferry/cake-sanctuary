import { type Cart, carts, menus, type Menu } from '@/@fake/data';

export const useCartStore = defineStore('cart', () => {
    const dataCart = ref<Cart[]>(carts);

    const getAllProduct = computed(() => {
        // console.log(dataCart.value);
        return dataCart.value.map((item: Cart) => {
            let product = menus.find(
                (dataProduct: Menu) => dataProduct.id === item.menuId
            );

            if (product) {
                let obj = {
                    ...item,
                    ...product
                };

                return obj;
            }
        });

        // return 'Hello';
    });

    const addCartItem = (value: number) => {
        //carts.value.push(value);
    };

    const removeCartItem = (value: number) => {
        //carts.value.slice(value, 1);
    };

    return {
        dataCart,
        getAllProduct,
        addCartItem,
        removeCartItem,
    };
});
