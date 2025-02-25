<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

interface Overview {
  title: string
  count: string
  badge: string
  badgeVariant: 'default' | 'secondary' | 'destructive' | 'warning' | 'outline' | 'success'
  lastWeek: boolean
  icon: string
  iconBadgeClass: string
}

const overview = ref<Overview[]>([
  {
    title: 'Total Product Menu',
    count: '200',
    badge: '+2',
    badgeVariant: 'default',
    lastWeek: false,
    icon: 'tabler:package',
    iconBadgeClass: 'bg-primary/20 text-primary',
  },
  {
    title: 'Total Product Category',
    count: '50',
    badge: '',
    badgeVariant: 'default',
    lastWeek: false,
    icon: 'tabler:category',
    iconBadgeClass: 'bg-[#FBA834]/20 text-[#FBA834]',
  },

  {
    title: 'Purchase invoice ',
    count: '250',
    badge: '+10%',
    badgeVariant: 'default',
    lastWeek: true,
    icon: 'tabler:file-invoice',
    iconBadgeClass: 'bg-success/20 text-success',
  },
  {
    title: 'Monthly Income',
    count: '$ 5,190',
    badge: '-10%',
    badgeVariant: 'destructive',
    lastWeek: true,
    icon: 'tabler:calendar-dollar',
    iconBadgeClass: 'bg-[#BE0EAA]/20 text-[#BE0EAA]',
  },
])
</script>

<template>
  <WrapperPages class="min-h-screen">
    <Card>
      <CardContent class="py-4">
        <div class="grid py-3 gap-4 lg:grid-cols-4">
          <div
            v-for="dataItem, index in overview"
            :key="index"
            class="flex justify-between p-3"
          >
            <div class="flex flex-col">
              <p class="font-medium text-sm">
                {{ dataItem.title }}
              </p>

              <div class="flex gap-1 my-2 items-end">
                <p class="font-bold text-3xl">
                  {{ dataItem.count }}
                </p>

                <template v-if="dataItem.badge">
                  <Badge :variant="dataItem.badgeVariant">
                    {{ dataItem.badge }}
                  </Badge>
                </template>
              </div>

              <p
                v-if="dataItem.lastWeek"
                class="font-base text-secondary text-sm"
              >
                last week
              </p>
            </div>
            <div>
              <div
                :class="dataItem.iconBadgeClass"
                class="flex items-center rounded-lg p-2"
              >
                <Icon
                  :name="dataItem.icon"
                  class="text-inherit"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </WrapperPages>
</template>
