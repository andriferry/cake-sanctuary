<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()

const { icons } = useAppConfig()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <Icon
      :name="icons.sidebarTrigger"
      class="text-xl text-secondary"
    />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
