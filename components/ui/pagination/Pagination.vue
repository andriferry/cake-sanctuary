<script setup lang="ts">
import type { Emit, PaginationFetch, PaginationProps } from './types'
import { buttonVariants, variants } from '@/components/ui/button/index'
import { cn } from '@/lib/utils'
import { paginationFunc } from './index'

const props = withDefaults(defineProps<PaginationProps>(), {
  length: 1,
  currentPage: 1,
  pageSize: 5,
  rounded: 'default',
  lastFirstArrow: false,
  prevIcon: '',
  nextIcon: '',
  visible: 10,
  activeClass: '',
  size: 'icon',
})

const emit = defineEmits<Emit>()

const { icons } = useAppConfig()
const model = defineModel<number>()

const fetchData = ({ currentPage, currentPageSize }: PaginationFetch) => {
  emit('onChange', { currentPage, currentPageSize })
}

const { currentPage, pageCount, prev, next, isFirstPage, isLastPage }
    = useOffsetPagination({
      total: props.length,
      page: props.currentPage,
      pageSize: props.pageSize,
      onPageChange: fetchData,
      onPageSizeChange: fetchData,
    })

watch(currentPage, (value) => {
  if (model.value)
    model.value = value
})

const nextIconArrow = computed(() => {
  return props.nextIcon ? props.nextIcon : icons.chevronRight
})

const prevIconArrow = computed(() => {
  return props.prevIcon ? props.prevIcon : icons.chevronLeft
})

const pagesData = computed(() => {
  return paginationFunc(
    props.visible,
    model.value || currentPage.value,
    pageCount.value,
  )
})

const btnActiveClass = (index: number) => {
  if (props.activeClass) {
    return currentPage.value === index
      ? cn(
          props.activeClass,
          variants.rounded[props.rounded || 'default'],
        )
      : buttonVariants({
          variant: 'outline',
          rounded: props.rounded,
          size: props.size,
        })
  }
  else {
    return currentPage.value === index
      ? buttonVariants({
          variant: 'default',
          rounded: props.rounded,
          size: props.size,
        })
      : buttonVariants({
          variant: 'outline',
          rounded: props.rounded,
          size: props.size,
        })
  }
}
onMounted(async () => {
  if (model.value === undefined) {
    currentPage.value = 1
  }
  else {
    currentPage.value = model.value
  }
  await fetchData({
    currentPage: props.currentPage,
    currentPageSize: props.pageSize,
  })
})
</script>

<template>
  <div
    class="w-full flex items-center flex-wrap gap-3"
    :class="props.class"
  >
    <Button
      v-if="lastFirstArrow"
      :disabled="isFirstPage"
      variant="outline"
      :rounded="rounded"
      :class="cn('p-0', props.btnClass)"
      :size="size"
      @click="currentPage = 1"
    >
      <ArrowDoubleLeftIcon />
    </Button>
    <Button
      :disabled="isFirstPage"
      :rounded="rounded"
      variant="outline"
      :class="cn('p-0', props.btnClass)"
      :size="size"
      @click="prev"
    >
      <Icon
        :name="prevIconArrow"
        class="w-4"
      />
    </Button>

    <template v-for="index in pagesData">
      <Button
        v-if="typeof index === 'number'"
        :key="index"
        :class="cn('p-0', props.btnClass, btnActiveClass(index))"
        @click="currentPage = Number(index)"
      >
        {{ index }}
      </Button>

      <Button
        v-else
        :key="`btn-${index}`"
        disabled
        :size="size"
        :rounded="rounded"
        :class="
          cn(
            'p-0 border-none text-secondary  shadow-none ',
            props.btnClass,
          )
        "
      >
        {{ index }}
      </Button>
    </template>

    <Button
      variant="outline"
      :disabled="isLastPage"
      :rounded="rounded"
      :class="cn('p-0', props.btnClass)"
      :size="size"
      @click="next"
    >
      <Icon
        :name="nextIconArrow"
        class="w-4"
      />
    </Button>
    <Button
      v-if="lastFirstArrow"
      :disabled="isLastPage"
      :rounded="rounded"
      :class="cn('p-0', props.btnClass)"
      variant="outline"
      :size="size"
      @click="currentPage = pageCount"
    >
      <ArrowDoubleRightIcon />
    </Button>
  </div>
</template>
