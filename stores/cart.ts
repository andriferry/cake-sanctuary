import { type Cart, type Menu, carts, menus } from '@/@fake/data'

interface Order {
  orderNumber: string
  orderStatus: string
  tables: string[]
  paperBag: false
  products: any[]
  paymentMethod: string
}

export const useCartStore = defineStore('cart', () => {
  const dataCart = ref<Cart[]>(carts)

  const order = ref<Order>({
    orderNumber: '123456',
    orderStatus: 'dine-in',
    tables: [],
    paperBag: false,
    products: [],
    paymentMethod: '',
  })

  const addCartItem = () => {
    // carts.value.push(value);
  }

  const removeCartItem = (item: Menu) => {
    const productIndex = order.value.products.findIndex((dataProduct: Menu) => dataProduct.id === item.id)

    if (productIndex > -1)
      order.value.products.splice(productIndex, 1)
  }

  const init = () => {
    const allProduct: Menu[] = dataCart.value.map((item: Cart) => {
      const product: Menu | undefined = menus.find((dataProduct: Menu) => dataProduct.id === item.menuId)

      let obj: any = {}

      if (product) {
        obj = {
          ...item,
          ...product,
          qty: item.qty,
        }
      }

      return obj
    })

    order.value.products = allProduct.slice(0, 5)
  }

  return {
    order,
    dataCart,
    addCartItem,
    removeCartItem,
    init,
  }
})
