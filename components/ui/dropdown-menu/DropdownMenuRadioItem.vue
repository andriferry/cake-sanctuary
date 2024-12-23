<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
    DropdownMenuItemIndicator,
    DropdownMenuRadioItem,
    type DropdownMenuRadioItemEmits,
    type DropdownMenuRadioItemProps,
    useForwardPropsEmits,
} from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';

interface Props extends DropdownMenuRadioItemProps {
    class?: HTMLAttributes['class'];
    dotIcon?: string;
}

const props = withDefaults(defineProps<Props>(), {
    dotIcon: 'tabler:circle-dot',
});

const emits = defineEmits<DropdownMenuRadioItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <DropdownMenuRadioItem
        v-bind="forwarded"
        :class="
            cn(
                'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 text-sm outline-none transition-colors focus:bg-accent  data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                props.class
            )
        ">
        <span
            class="absolute start-0 z-10 inset-y-0 flex items-center justify-center px-2">
            <DropdownMenuItemIndicator class="flex">
                <Icon
                    :name="dotIcon"
                    class="font-medium text-lg text-inherit" />
            </DropdownMenuItemIndicator>
        </span>
        <slot />
    </DropdownMenuRadioItem>
</template>
