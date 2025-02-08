<script setup lang="ts">
interface Props {
  heading?: string
}

const { heading = '' } = defineProps<Props>()
</script>

<template>
  <SidebarGroupLabel>{{ heading }}</SidebarGroupLabel>
</template>
