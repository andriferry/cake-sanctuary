<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  defaultValue?: string | number
  modelValue?: string | number
  class?: VueHtmlAttributes['class']
  placeholder?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: 'Input text here',
})

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const classWatch = computed(() => {
  return cn(
    'flex h-9 w-full rounded-md  bg-transparent px-3 py-1 text-sm shadow-sm slow-transition file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50',
    props.class,
  )
})
</script>

<template>
  <input
    v-model="modelValue"
    :placeholder="placeholder"
    :type="type"
    class="group z-10 relative focus:border-primary focus:outline-none border-2"
    :class="classWatch"
  />
</template>
