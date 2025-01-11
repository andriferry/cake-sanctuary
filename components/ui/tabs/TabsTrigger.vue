<script setup lang="ts">
import { cn } from '@/lib/utils';
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue';
import { type HTMLAttributes } from 'vue';

interface Props extends TabsTriggerProps {
    class?: HTMLAttributes['class'];
    prependIcon?: string;
    appendIcon?: string;
    activeClass?: string;
}

const props = defineProps<Props>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const activeClass = computed(() => {
    return props.activeClass
        ? props.activeClass
        : 'data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-primary';
});

const wrapperClass = computed(() => {
    return cn(
        'inline-flex transition duration-300 ease-in-out truncate items-center gap-1 px-2 py-1.5 items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium  transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-2',
        props.class,
        activeClass.value
    );
});
</script>

<template>
    <TabsTrigger v-bind="forwardedProps" :class="wrapperClass">
        <Icon v-if="prependIcon" :name="prependIcon" class="size-[18px]" />
        <slot />
        <Icon v-if="appendIcon" :name="appendIcon" class="size-[18px]" />
    </TabsTrigger>
</template>
