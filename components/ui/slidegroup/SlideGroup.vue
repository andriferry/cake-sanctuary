<script setup lang="ts">
const selectedIndex = defineModel()
</script>

<template>
  <div class="w-full overflow-hidden relative">
    <Carousel
      v-model="selectedIndex"
      class="relative w-full"
    >
      <CarouselContent class="flex gap-9 ml-0">
        <slot></slot>
      </CarouselContent>
    </Carousel>
  </div>
</template>
