<script lang="ts" setup>
const props = defineProps<{
  class?: VueHtmlAttributes['class']
}>()
</script>

<template>
  <nav aria-label="breadcrumb" :class="props.class">
    <slot></slot>
  </nav>
</template>
