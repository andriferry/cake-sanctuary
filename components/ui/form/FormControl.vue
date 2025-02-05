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
    append?: Function;
}

interface Emits {
    (e: 'update:modelValue', payload: string | number): void;
    (e: 'clickAppend'): void;
}

const props = withDefaults(defineProps<Props>(), {
    errorMessage: '',
});

const emits = defineEmits<Emits>();

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue || props.value,
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
                'flex justify-between',
            ]">
            {{ label }}


            <span v-if="hint" class="text-[0.65rem] text-secondary/60">
                {{ hint }}
            </span>
        </FormLabel>

        <div class="flex flex-col relative">
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
                    @click="emits('clickAppend')"
                    class="absolute end-0 inset-y-0 z-10 flex items-center justify-center px-2">
                    <Icon
                        role="button"
                        :name="appendIcon"
                        class="text-lg text-muted-foreground" />
                </span>

                <span
                    v-if="prependIcon"
                    class="absolute start-0 z-10 inset-y-0 flex items-center justify-center px-2">
                    <Icon
                        :name="prependIcon"
                        class="text-lg text-muted-foreground" />
                </span>
            </div>
        </div>

        <FormMessage :message="errorMessage" />
    </div>
</template>
