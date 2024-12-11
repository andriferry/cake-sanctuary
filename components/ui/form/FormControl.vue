<script lang="ts" setup>
import { FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface Props {
    name?: string;
    label?: string;
    value?: string;
    errorMessage?: string;
    description?: string;
    hint?: string;
    placeholder?: string;
    type?: string;
    defaultValue?: string | number;
    modelValue?: string | number;
    appendIcon?: string;
    prependIcon?: string;
}

interface Emits {
    (e: 'update:modelValue', payload: string | number): void;
}

const props = withDefaults(defineProps<Props>(), {
    errorMessage: '',
});

const emits = defineEmits<Emits>();

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
});

const hitHint = ref(false);

const inputClass = computed(() => {
    return [
        {
            'border-destructive': props.errorMessage,
        },

        {
            'pr-10': props.appendIcon,
        },
        {
            'pl-10': props.prependIcon,
        },
    ];
});
</script>

<template>
    <div class="flex flex-col gap-3">
        <FormLabel
            :for="name"
            :class="[
                hitHint ? 'text-primary' : 'text-secondary',
                { 'text-destructive': errorMessage },
            ]">
            {{ label }}
        </FormLabel>

        <div class="flex flex-col relative" :class="{ 'mb-3': hint }">
            <div class="relative w-full max-w-sm items-center">
                <Input
                    @focus="hitHint = true"
                    @blur="hitHint = false"
                    :type="type"
                    v-model="modelValue"
                    :class="inputClass"
                    :placeholder="placeholder" />

                <span
                    v-if="appendIcon"
                    role="button"
                    class="absolute end-0 inset-y-0 z-10 flex items-center justify-center px-2">
                    <Icon
                        role="button"
                        :name="appendIcon"
                        class="text-lg text-muted-foreground" />
                </span>

                <span
                    v-if="prependIcon"
                    role="button"
                    class="absolute start-0 z-10 inset-y-0 flex items-center justify-center px-2">
                    <Icon
                        role="button"
                        :name="prependIcon"
                        class="text-lg text-muted-foreground" />
                </span>
            </div>

            <Transition name="fade" mode="out-in">
                <span
                    v-if="hitHint"
                    class="transition text-secondary text-sm absolute -bottom-5 duration-300 ease-in-out z-0">
                    {{ hint }}
                </span>
            </Transition>
        </div>

        <FormMessage :message="errorMessage" />
    </div>
</template>
