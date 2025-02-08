<script setup lang="ts">
interface Props {
  content?: string
  pingAnimate?: boolean
  color?: string
}

withDefaults(defineProps<Props>(), {
  content: '',
  pingAnimate: false,
  color: 'bg-primary',
})
</script>

<template>
  <div class="absolute z-10 top-0 right-0">
    <span class="relative flex min-w-5 h-5">
      <span
        v-if="pingAnimate"
        class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="color"
      ></span>

      <span
        class="relative justify-center text-white items-center inline-flex rounded-full text-[.75rem] font-medium text-center min-w-5" :class="color"
      >
        {{ content }}
      </span>
    </span>
  </div>
</template>
