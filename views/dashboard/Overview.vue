<script setup lang="ts">
const overview = ref([
  {
    description: 'Total Sales',
    title: '$ 121,412',
    class: 'bg-primary/20 text-primary',
    icon: 'tabler:currency-dollar',
  },

  {
    description: 'Total Customers',
    title: '4,324',
    class: 'bg-[#F26627]/20 text-[#F26627]',
    icon: 'tabler:users-group',
  },
  {
    description: 'Total Order',
    title: '5,021',
    class: 'bg-[#15B392]/20 text-[#15B392]',
    icon: 'tabler:bowl-chopsticks',
  },
  {
    description: 'Total Tips',
    title: '$ 1,401',
    class: 'bg-[#7A0BC0]/20 text-[#7A0BC0]',
    icon: 'tabler:wallet',
  },
])
</script>

<template>
  <div class="grid grid-cols-2 xl:grid-cols-4 gap-4">
    <div
      v-for="(data, index) in overview"
      :key="index"
      class="col-span-1"
    >
      <Card>
        <CardHeader class="flex-row items-center justify-between">
          <div class="flex gap-2 flex-col">
            <CardDescription class="truncate">
              {{ data.description }}
            </CardDescription>
            <CardTitle class="text-xl font-semibold">
              {{ data.title }}
            </CardTitle>
          </div>

          <div
            :class="data.class"
            class="flex items-center rounded-lg p-2"
          >
            <Icon
              :name="data.icon"
              class="text-inherit"
            />
          </div>
        </CardHeader>
      </Card>
    </div>
  </div>
</template>
