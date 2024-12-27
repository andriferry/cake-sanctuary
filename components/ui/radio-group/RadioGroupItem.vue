<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
    RadioGroupIndicator,
    RadioGroupItem,
    type RadioGroupItemProps,
    useForwardProps,
} from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

interface Props extends RadioGroupItemProps {
    class?: HTMLAttributes['class'];
    dotIcon?: string;
    title?: string;
    id?: string;
}

const props = defineProps<Props>();

const { icons } = useAppConfig();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const icon = computed(() => props.dotIcon || icons.radioItemIcon);

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <div class="flex items-center space-x-2">
        <RadioGroupItem
            v-bind="forwardedProps"
            :class="
                cn(
                    'aspect-square h-4 w-4 rounded-full border ring-1 ring-primary border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                    props.class
                )
            ">
            <RadioGroupIndicator class="flex items-center justify-center">
                <Icon
                    :name="icon"
                    class="font-medium h-3.5 w-3.5 text-inherit" />
            </RadioGroupIndicator>
        </RadioGroupItem>
        <Label :for="id">{{ title }}</Label>
    </div>
</template>
