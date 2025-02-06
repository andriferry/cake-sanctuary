import { type Cart, carts, menus, type Menu } from '@/@fake/data';

interface PersonName {
    firstName?: string;
    lastName?: string;
}
interface AllProduct {
    qty: number;
    price: number | undefined;
    title: string;
    items?: number;
    icon?: string;
    value?: string;
    img?: string;
    category?: any[];
    id: number;
    menuId: number;
}

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
    paymentMethod: '',
  });

  const getAllProduct = computed(() => {
    const allProduct = dataCart.value.map((item: Cart) => {
      const product: Menu | undefined = menus.find(
        (dataProduct: Menu) => dataProduct.id === item.menuId
      );

      if ( product ) {
        const obj = {
          ...item,
          ...product,
          qty: item.qty,
          //price: product.price
        };

        return obj;
      }
    });

    return allProduct.slice(0, 5);
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
