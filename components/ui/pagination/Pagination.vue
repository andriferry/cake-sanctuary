<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { Emit, PaginationFetch, Props } from './types';
import { paginationFunc } from './index';

const props = withDefaults(defineProps<Props>(), {
    length: 1,
    currentPage: 1,
    pageSize: 5,
    rounded: 'default',
    lastFirstArrow: false,
    prevIcon: '',
    nextIcon: '',
    visible: 10,
});

const emit = defineEmits<Emit>();

const { icons } = useAppConfig();
const model = defineModel<number>();

const fetchData = ({ currentPage, currentPageSize }: PaginationFetch) => {
    emit('onChange', { currentPage, currentPageSize });
};

const { currentPage, pageCount, prev, next, isFirstPage, isLastPage } =
    useOffsetPagination({
        total: props.length,
        page: props.currentPage,
        pageSize: props.pageSize,
        onPageChange: fetchData,
        onPageSizeChange: fetchData,
    });

watch(currentPage, (value) => {
    if (model.value) model.value = value;
});

const nextIconArrow = computed(() => {
    return props.nextIcon ? props.nextIcon : icons.chevronRight;
});

const prevIconArrow = computed(() => {
    return props.prevIcon ? props.prevIcon : icons.chevronLeft;
});

const pagesData = computed(() => {
    return paginationFunc(
        props.visible,
        model.value || currentPage.value,
        pageCount.value
    );
});

onMounted(async () => {
    if (model.value === undefined) {
        currentPage.value = 1;
    } else {
        currentPage.value = model.value;
    }
    await fetchData({
        currentPage: props.currentPage,
        currentPageSize: props.pageSize,
    });

    console.log(paginationFunc(10, 1, props.length));
});
</script>

<template>
    <div class="w-full flex items-center flex-wrap gap-3">
        {{ pagesData }}
        <Button
            v-if="lastFirstArrow"
            @click="currentPage = 1"
            :disabled="isFirstPage"
            variant="outline"
            :rounded="rounded"
            :class="cn('w-9 h-9 p-0', props.class)"
            size="icon">
            <ArrowDoubleLeftIcon />
        </Button>
        <Button
            @click="prev"
            :disabled="isFirstPage"
            :rounded="rounded"
            variant="outline"
            :class="cn('w-9 h-9 p-0', props.class)"
            size="icon">
            <Icon :name="prevIconArrow" class="w-4"></Icon>
        </Button>
        <Button
            v-for="index in pageCount"
            :key="index"
            :rounded="rounded"
            :class="cn('w-9 h-9 p-0', props.class)"
            :variant="currentPage === index ? 'default' : 'outline'"
            @click="currentPage = index">
            {{ index }}
        </Button>
        <Button
            variant="outline"
            :disabled="isLastPage"
            :rounded="rounded"
            :class="cn('w-9 h-9 p-0', props.class)"
            @click="next"
            size="icon">
            <Icon :name="nextIconArrow" class="w-4"></Icon>
        </Button>
        <Button
            v-if="lastFirstArrow"
            @click="currentPage = pageCount"
            :disabled="isLastPage"
            :rounded="rounded"
            :class="cn('w-9 h-9 p-0', props.class)"
            variant="outline"
            size="icon">
            <ArrowDoubleRightIcon />
        </Button>
    </div>
</template>
