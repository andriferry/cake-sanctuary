import { type Cart, carts, menus, type Menu } from '@/@fake/data';

export const useCartStore = defineStore('cart', () => {
    const dataCart = ref<Cart[]>(carts);

    const order = ref({
        orderNumber: '1234',
        orderStatus: 'dine-in',
        tables: ['TO1'],
        paperBag: false,
        orderProduct: [
            {
                id: 21,
                qty: 2,
            },
        ],
        paymentMethod: ''
    });

    const getAllProduct = computed(() => {
        return dataCart.value.map((item: Cart) => {
            let product = menus.find(
                (dataProduct: Menu) => dataProduct.id === item.menuId
            );

            if (product) {
                let obj = {
                    ...item,
                    ...product,
                };

                return obj;
            }
        });
    });

    const addCartItem = (value: number) => {
        //carts.value.push(value);
    };

    const removeCartItem = (value: number) => {
        //carts.value.slice(value, 1);
    };

    return {
        order,
        dataCart,
        getAllProduct,
        addCartItem,
        removeCartItem,
    };
});
