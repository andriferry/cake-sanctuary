<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <WrapperPages class="min-h-screen">
    <div class="grid grid-cols-12 gap-3">
      <div class="col-span-12">
        <ProductOverview />
      </div>

      <div class="col-span-12">
        <ProductStatsChart />
      </div>

      <div class="col-span-12">
        <ProductTable />
      </div>
    </div>
  </WrapperPages>
</template>
