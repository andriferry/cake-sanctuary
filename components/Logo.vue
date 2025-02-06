<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
const { title } = useAppConfig();

interface Props {
    class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();

const classData = computed(() => {
  return cn(
    'font-semibold leading-none justify-center tracking-tight flex text-primary items-center gap-3 text-xl',
    props.class
  );
});
</script>

<template>
    <h3 :class="classData">
        <LogoIcon />

        <span class=""> {{ title }} </span>
    </h3>
</template>
