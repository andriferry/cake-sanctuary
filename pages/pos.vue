<script setup lang="ts">
const route = useRoute();
</script>

<template>
    <div class="bg-yellow-500">
        {{ route.name }}
    </div>
</template>

<style scoped></style>
