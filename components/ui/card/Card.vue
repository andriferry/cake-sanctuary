<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { CardVariant } from '.'
import { cn } from '@/lib/utils'
import { cardVariant } from '.'

interface Props {
  variant?: CardVariant['variant']
  class?: HTMLAttributes['class']
  title?: string
  subtitle?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn(cardVariant({ variant }), props.class)">
    <CardHeader v-if="title || subtitle">
      <CardTitle v-if="title">
        {{ title }}
      </CardTitle>
      <CardDescription v-if="subtitle">
        {{ subtitle }}
      </CardDescription>
    </CardHeader>
    <slot></slot>
  </div>
</template>
