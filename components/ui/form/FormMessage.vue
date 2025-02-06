<script lang="ts" setup>
interface Props {
    message?: string;
}

defineProps<Props>();
</script>

<template>
    <p class="text-[0.8rem] font-medium text-destructive">
        {{ message }}
    </p>
</template>
