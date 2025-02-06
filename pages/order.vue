<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
const route = useRoute()
</script>

<template>
  <div class="bg-yellow-500">
    {{ route.name }}
  </div>
</template>

<style scoped></style>
