<script setup lang="ts">
import type { Menu } from '@/@fake/data'

import { convertCurrency } from '@@/lib/utils'

const cartStore = useCartStore()
const { icons } = useAppConfig()

const {
  order,
  subtotal,
} = storeToRefs(cartStore)

const dialogOpen = ref(false)

const tabs = ref([
  {
    title: 'Dine In',
    value: 'dine-in',
    icon: 'tabler:building-store',
  },
  {
    title: 'Take Away',
    value: 'take-away',
    icon: 'tabler:basket',
  },
])

const paymentMethod = ref([
  {
    title: 'Debit Card',
    icon: 'tabler:credit-card',
    value: 'debitCard',
  },
  {
    title: 'PayPal',
    icon: 'tabler:brand-paypal',
    value: 'paypal',
  },
  {
    title: 'Cash',
    icon: 'tabler:cash',
    value: 'scan-qr',
  },
])

function changeProductQty(event: number, item: Menu) {
  if (event === 0)
    cartStore.removeCartItem(item)
}

function convertToCurrency(price: number | undefined, qty: number | undefined) {
  if (typeof price == 'number' && typeof qty === 'number')
    return convertCurrency(price * qty)
  else return convertCurrency(0)
}

onMounted(() => {
  cartStore.init()
})
</script>

<template>
  <div>
    <Button
      variant="plain"
      size="icon"
      @click="dialogOpen = !dialogOpen"
    >
      <Icon
        name="tabler:shopping-cart"
        class="text-secondary"
      />

      <Indicator :content="`${order.products.length}`" />
    </Button>

    <Dialog v-model:open="dialogOpen">
      <DialogContent class="w-full sm:max-w-[425px] md:max-w-lg xl:w-full xl:max-w-md grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
        <DialogHeader class="p-6 pb-0">
          <DialogTitle> Current Order #{{ order.orderNumber }} </DialogTitle>
        </DialogHeader>
        <div class="grid gap-4 py-4 overflow-y-auto px-6">
          <div class="flex flex-col h-auto">
            <FormControl
              model-value="John Doe"
              prepend-icon="tabler:user"
              label="Customer Name"
              placeholder="Input Customer Name"
            />

            <Label class="mb-3"> Where will you eat: </Label>

            <Tabs
              v-model="order.orderStatus"
              class="w-full"
            >
              <TabsList class="grid w-full bg-transparent gap-3 grid-cols-2">
                <TabsTrigger
                  v-for="(dataTabs, index) in tabs"
                  :key="index"
                  :value="dataTabs.value"
                  :prepend-icon="dataTabs.icon"
                >
                  <span>{{ dataTabs.title }}</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="dine-in">
                <SelectTable />
              </TabsContent>
              <TabsContent value="take-away">
                <Packaging />
              </TabsContent>
            </Tabs>

            <Label class="my-3"> Your Order: </Label>

            <div class="flex flex-col gap-3 mt-3">
              <div
                v-for="(product, index) in order.products"
                :key="index"
                class="p-3 border grid grid-cols-12 gap-2 text-secondary rounded-lg"
              >
                <div class="col-span-3">
                  <Avatar
                    class="size-12 lg:size-[5.3rem]"
                    shape="square"
                  >
                    <AvatarImage
                      :src="product.img || ''"
                      :alt="product.title"
                    />
                  </Avatar>
                </div>
                <div class="col-span-7 flex gap-2 flex-col">
                  <p class="text-sm font-medium truncate">
                    {{ product.title }}
                  </p>
                  <small class="mb-1">
                    {{ convertCurrency(product.price || 0) }}
                  </small>

                  <NumberField
                    v-model="product.qty"
                    :min="0"
                    class="w-20"
                    @update:model-value="changeProductQty($event, product)"
                  >
                    <NumberFieldContent>
                      <NumberFieldDecrement class="w-5 p-0 border flex justify-center items-center h-5 rounded-md" />
                      <NumberFieldInput class="border-none text-primary h-5 shadow-none" />
                      <NumberFieldIncrement class="w-5 p-0 border flex justify-center items-center h-5 rounded-md" />
                    </NumberFieldContent>
                  </NumberField>
                </div>
                <div class="col-span-2 flex flex-col justify-between items-end">
                  <Button
                    variant="plain"
                    size="xs"
                    @click="cartStore.removeCartItem(product)"
                  >
                    <Icon
                      :name="icons.delete"
                      class="text-destructive"
                    />
                  </Button>
                  <p class="text-xs font-light">
                    {{ convertToCurrency(product?.price, product?.qty) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter class="p-6 pt-0 flex !flex-col gap-3">
          <div class="p-3 grid gap-3 grid-flow-row auto-rows-max border text-secondary rounded-lg">
            <div class="w-full flex justify-between">
              <p class="text-sm font-medium">
                Subtotal ({{ subtotal.subtotal }})
              </p>

              <p class="text-sm font-bold">
                {{ convertCurrency(subtotal.subtotalAmount || 0) }}
              </p>
            </div>
            <div class="w-full flex justify-between">
              <p class="text-sm font-medium">
                Service Tax ({{ order.tax }} %)
              </p>

              <p class="text-sm font-bold">
                {{ convertCurrency(subtotal.taxAmount || 0) }}
              </p>
            </div>
            <div class="border-t-2 w-full flex justify-between pt-2">
              <p class="text-sm font-black">
                Total Payment
              </p>

              <p class="text-sm font-bold">
                {{ convertCurrency(subtotal.totalPayment || 0) }}
              </p>
            </div>
          </div>

          <Label class="pt-2"> Payment Method: </Label>

          <div class="grid grid-cols-3 py-2 gap-3">
            <div
              v-for="(payment, index) in paymentMethod"
              :key="index"
              class="col-span-1 group gap-2 flex flex-col justify-center items-center"
            >
              <Button
                size="full"
                variant="outline"
                class="p-3 rounded-lg group-hover:bg-transparent group-hover:border-primary group-hover:text-primary"
              >
                <Icon
                  :name="payment.icon"
                  class="size-6"
                />
              </Button>
              <p class="text-xs group-hover:text-primary font-medium">
                {{ payment.title }}
              </p>
            </div>
          </div>

          <Button> Make Order  </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
