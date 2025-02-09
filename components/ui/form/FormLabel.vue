<script lang="ts" setup>
import type { LabelProps } from 'radix-vue'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const props = defineProps<LabelProps & { class?: VueHtmlAttributes['class'] }>()
</script>

<template>
  <Label :class="cn(props.class)">
    <slot></slot>
  </Label>
</template>
