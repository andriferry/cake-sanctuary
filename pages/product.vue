<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <WrapperPages class="min-h-screen">
    <ProductOverview />
    <!-- <ProductStatsChart /> -->
    <ProductTable />
  </WrapperPages>
</template>
