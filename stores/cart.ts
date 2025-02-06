import { type Cart, type Menu, carts, menus } from '@/@fake/data'

interface Order {
  orderNumber: string
  orderStatus: string
  tables: string[]
  paperBag: false
  products: any[]
  paymentMethod: string
  subtotal: number
  tax: number
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
    subtotal: 0,
    tax: 2,
  })

  const addCartItem = (item: Menu) => {
    // carts.value.push(value);

    console.log(item)
  }

  const subtotal = computed(() => {
    const subtotalProduct = useArrayReduce(order.value.products, (sum, val) => sum + val.qty, 0)
    const subtotalPrice = useArrayReduce(order.value.products, (sum, val) => sum + val.qty * val.price, 0)
    const subtotalTaxAmount = (order.value.tax / 100 * subtotalPrice.value)
    const subtotalTotalAmount = subtotalPrice.value + subtotalTaxAmount

    return {
      subtotal: subtotalProduct.value,
      subtotalAmount: subtotalPrice.value,
      taxAmount: subtotalTaxAmount,
      totalPayment: subtotalTotalAmount,
    }
  })

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
    subtotal,
    addCartItem,
    removeCartItem,
    init,
  }
})
