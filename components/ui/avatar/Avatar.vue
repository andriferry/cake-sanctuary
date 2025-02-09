<script setup lang="ts">
import type { AvatarVariants } from '.'
import { cn } from '@/lib/utils'
import { AvatarRoot } from 'radix-vue'
import { avatarVariant } from '.'

interface Props {
  class?: VueHtmlAttributes['class']
  size?: AvatarVariants['size']
  shape?: AvatarVariants['shape']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
  shape: 'circle',
})
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot></slot>
  </AvatarRoot>
</template>
