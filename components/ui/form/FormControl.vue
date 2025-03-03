<script lang="ts" setup>
import {
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface Props {
  name?: string
  label?: string
  value?: string
  errorMessage?: string
  description?: string
  hint?: string
  placeholder?: string
  type?: string
  defaultValue?: any
  modelValue?: any
  appendIcon?: string
  prependIcon?: string
}

interface Emits {
  (e: 'update:modelValue', payload: any): void
  (e: 'clickAppend'): void
}

const props = withDefaults(defineProps<Props>(), { errorMessage: '' })

const emits = defineEmits<Emits>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue || props.value,
})

const hitHint = ref(false)

const inputClass = computed(() => {
  return [
    { 'border-destructive': props.errorMessage },
    { 'pr-10': props.appendIcon },
    { 'pl-10': props.prependIcon },
  ]
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <FormLabel
      :for="name"
      class="flex justify-between"
      :class="[
        hitHint ? 'text-primary' : 'text-secondary',
        { 'text-destructive': errorMessage },
      ]"
    >
      {{ label }}

      <span
        v-if="hint"
        class="text-[0.65rem] text-secondary/60"
      >
        {{ hint }}
      </span>
    </FormLabel>

    <div class="flex flex-col relative">
      <div class="relative w-full items-center">
        <Input
          v-model="modelValue"
          :type="type"
          :class="inputClass"
          :placeholder="placeholder"
          @focus="hitHint = true"
          @blur="hitHint = false"
        />

        <span
          v-if="appendIcon"
          role="button"
          class="absolute end-0 inset-y-0 z-10 flex items-center justify-center px-2"
          @click="emits('clickAppend')"
        >
          <Icon
            role="button"
            :name="appendIcon"
            class="text-lg text-muted-foreground"
          />
        </span>

        <span
          v-if="prependIcon"
          class="absolute start-0 z-10 inset-y-0 flex items-center justify-center px-2"
        >
          <Icon
            :name="prependIcon"
            class="text-lg text-muted-foreground"
          />
        </span>
      </div>
    </div>

    <FormMessage :message="errorMessage" />
  </div>
</template>
