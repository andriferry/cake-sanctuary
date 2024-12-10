<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook('page:start', () => {
    loading.value = true;
});
nuxtApp.hook('page:finish', () => {
    loading.value = false;
});
</script>
<template>
    <div :class="{ 'h-screen overflow-hidden': loading }">
        <NuxtLoadingIndicator />
        <NuxtLayout class="font-inter">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
