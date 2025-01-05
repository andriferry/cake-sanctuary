<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
interface Props {
    length?: number,
    nextIcon?: string,
    prevIcon?: string
    rounded?: string
    class?: HTMLAttributes['class'];
    currentPage?: number
    pageSize?: number
}


const props = withDefaults( defineProps<Props>(), {
    length: 1,
    currentPage: 1,
    pageSize: 10
})




const { currentPage, pageCount, prev, next, isFirstPage, isLastPage } =
    useOffsetPagination({
        total: props.length,
        page: props.currentPage,
        pageSize: props.pageSize,
        // onPageChange: fetchData,
        // onPageSizeChange: fetchData,
    });
</script>

<template>
    <div class="w-full flex items-center flex-wrap gap-3">
        <Button
            @click="currentPage = 1"
            :disabled="isFirstPage"
            variant="outline"
            size="icon">
            <ArrowDoubleLeftIcon />
        </Button>
        <Button
            @click="prev"
            :disabled="isFirstPage"
            variant="outline"
            size="icon">
            <ArrowLeftIcon />
        </Button>
        <Button
            v-for="index in pageCount"
            :key="index"
            :class="cn('w-9 h-9 p-0', props.class)"
            :variant="currentPage === index ? 'default' : 'outline'"
            @click="currentPage = index">
            {{ index }}
        </Button>
        <Button
            variant="outline"
            :disabled="isLastPage"
            @click="next"
            size="icon">
            <ArrowRightIcon />
        </Button>
        <Button
            @click="currentPage = pageCount"
            :disabled="isLastPage"
            variant="outline"
            size="icon">
            <ArrowDoubleRightIcon />
        </Button>
    </div>
</template>
