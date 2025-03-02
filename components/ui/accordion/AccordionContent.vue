<script setup lang="ts">
import type { AccordionContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { AccordionContent } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<AccordionContentProps & { class?: VueHtmlAttributes['class'] }>()

const delegatedProps = computed(() => {
  const {
    class: _,
    ...delegated
  } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('pb-4 pt-0', props.class)">
      <slot></slot>
    </div>
  </AccordionContent>
</template>
