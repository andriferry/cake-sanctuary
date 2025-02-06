import { type Cart, type Menu, carts, menus } from '@/@fake/data'

export const useCartStore = defineStore('cart', () => {
  const dataCart = ref<Cart[]>(carts)

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
  })

  const getAllProduct = computed(() => {
    const allProduct = dataCart.value.map((item: Cart) => {
      const product: Menu | undefined = menus.find((dataProduct: Menu) => dataProduct.id === item.menuId)

      let obj = {}
      if (product) {
        obj = {
          ...item,
          ...product,
          qty: item.qty,
        }
      }

      return obj
    })

    return allProduct.slice(0, 5)
  })

  const addCartItem = () => {
    // carts.value.push(value);
  }

  const removeCartItem = () => {
    // carts.value.slice(value, 1);
  }

  return {
    order,
    dataCart,
    getAllProduct,
    addCartItem,
    removeCartItem,
  }
})
