<script lang="ts" setup>
import { FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Slot } from 'radix-vue';

interface Props {
    name?: string;
    label?: string;
    value?: string;
    errorMessage?: string[];
    description?: string;
    hint?: string;
    placeholder?: string;
    type?: string;
    defaultValue?: string | number;
    modelValue?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
    errorMessage: () => [],
});

const hitHint = ref(false);

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
});
</script>

<template>
    <div class="flex flex-col gap-3">
        <FormLabel
            :for="name"
            :class="[
                hitHint ? 'text-primary' : 'text-secondary',
                { 'text-destructive': errorMessage?.length > 0 },
            ]">
            {{ label }}
        </FormLabel>

        <Slot :aria-invalid="errorMessage?.length > 0" :aria-describedby="name">
            <div class="flex flex-col relative">
                <Input
                    @focus="hitHint = true"
                    @blur="hitHint = false"
                    :type="type"
                    v-model="modelValue"
                    :class="{ 'border-destructive': errorMessage?.length > 0 }"
                    :placeholder="placeholder" />

                <Transition name="fade" mode="out-in">
                    <span
                        v-if="hitHint"
                        class="transition text-secondary text-sm absolute -bottom-5 duration-300 ease-in-out z-0">
                        {{ hint }}
                    </span>
                </Transition>
            </div>

            <FormMessage :id="name" :message="errorMessage[0]" />
        </Slot>
    </div>
</template>
