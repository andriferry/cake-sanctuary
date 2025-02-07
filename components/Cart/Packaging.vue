<template>
  <div class="flex flex-col gap-3">
    <Label> Packaging </Label>

    <div class="p-3 border grid grid-cols-12 text-secondary rounded-lg">
      <div class="col-span-3 flex items-center">
        <Icon
          name="tabler:paper-bag"
          class="size-9"
        />
      </div>

      <div class="col-span-7 flex flex-col gap-2">
        <p class="text-sm font-medium">Paper Bag</p>

        <NumberField
          :default-value="1"
          :min="0"
          class="w-20"
        >
          <NumberFieldContent>
            <NumberFieldDecrement
              class="w-5 p-0 border flex justify-center items-center h-5 rounded-md"
            />
            <NumberFieldInput
              class="border-none text-primary h-5 shadow-none"
            />
            <NumberFieldIncrement
              class="w-5 p-0 border flex justify-center items-center h-5 rounded-md"
            />
          </NumberFieldContent>
        </NumberField>
      </div>
      <div class="col-span-2 flex flex-col justify-between items-end">
        <p class="text-xs font-light">$ 1.00</p>
      </div>
    </div>

    <div class="p-3 border grid grid-cols-12 text-secondary rounded-lg">
      <div class="col-span-3 flex items-center">
        <Icon name="tabler:shopping-bag"
              class="size-9"
        />
      </div>

      <div class="col-span-7 flex flex-col gap-2">
        <p class="text-sm font-medium">Shopping Bag</p>

        <NumberField
          :default-value="1"
          :min="0"
          class="w-20"
        >
          <NumberFieldContent>
            <NumberFieldDecrement
              class="w-5 p-0 border flex justify-center items-center h-5 rounded-md"
            />
            <NumberFieldInput
              class="border-none text-primary h-5 shadow-none"
            />
            <NumberFieldIncrement
              class="w-5 p-0 border flex justify-center items-center h-5 rounded-md"
            />
          </NumberFieldContent>
        </NumberField>
      </div>
      <div class="col-span-2 flex flex-col justify-between items-end">
        <p class="text-xs font-light">$ 3.00</p>
      </div>
    </div>
  </div>
</template>
