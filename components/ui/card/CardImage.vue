<script setup lang="ts">
import type { CardVariant } from '.'

interface Props {
  variant?: CardVariant['variant']
  class?: VueHtmlAttributes['class']
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Card Title',
  subtitle: 'Card Subtitle',
  variant: 'flat',
  class: '',
})
</script>

<template>
  <div class="w-full h-[400px]">
    <Card
      class="h-auto cursor-pointer transition-all duration-300 ease-in-out border-primary"
    >
      <figure
        class="overflow-hidden rounded-ss-[inherit] rounded-se-[inherit] rounded-es-[unset] rounded-ee-[unset]"
      >
        <AspectRatio :ratio="16 / 14">
          <img
            class="object-cover w-full transition-all duration-300 ease-in-out h-full"
            src="https://plus.unsplash.com/premium_photo-1663840345377-3813d196d5da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFpbiUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </AspectRatio>
      </figure>
      <CardContent class="mt-1 p-3 text-start min-h-[40px]">
        <div class="font-medium">
          <h2 class="truncate">
            Roasted
          </h2>

          <span class="text-secondary text-sm"> $ 40.00 </span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
