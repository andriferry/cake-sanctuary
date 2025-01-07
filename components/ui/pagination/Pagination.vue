<script setup lang="ts">
import { buttonVariants, variants } from '@/components/ui/button/index';
import { cn } from '@/lib/utils';
import { paginationFunc } from './index';
import type { Emit, PaginationFetch, Props } from './types';

const props = withDefaults(defineProps<Props>(), {
    length: 1,
    currentPage: 1,
    pageSize: 5,
    rounded: 'default',
    lastFirstArrow: false,
    prevIcon: '',
    nextIcon: '',
    visible: 10,
    activeClass: '',
    size: 'default',
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

const btnActiveClass = (index: number) => {
    if (props.activeClass) {
        return currentPage.value === index
            ? cn(
                  props.activeClass,
                  variants.rounded[props.rounded || 'default']
              )
            : buttonVariants({ variant: 'outline', rounded: props.rounded });
    } else {
        return currentPage.value === index
            ? buttonVariants({ variant: 'default', rounded: props.rounded })
            : buttonVariants({ variant: 'outline', rounded: props.rounded });
    }
};
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
});
</script>

<template>
    <div class="w-full flex items-center flex-wrap gap-3" :class="props.class">
        <Button
            v-if="lastFirstArrow"
            @click="currentPage = 1"
            :disabled="isFirstPage"
            variant="outline"
            :rounded="rounded"
            :class="cn('w-9 h-9 p-0', props.btnClass)"
            size="icon">
            <ArrowDoubleLeftIcon />
        </Button>
        <Button
            @click="prev"
            :disabled="isFirstPage"
            :rounded="rounded"
            variant="outline"
            :class="cn('w-9 h-9 p-0', props.btnClass)"
            size="icon">
            <Icon :name="prevIconArrow" class="w-4"></Icon>
        </Button>

        <template v-for="index in pagesData">
            <Button
                v-if="typeof index === 'number'"
                :class="cn('w-9 h-9 p-0', props.btnClass, btnActiveClass(index))"
                @click="currentPage = Number(index)">
                {{ index }}
            </Button>

            <Button
                variant="outline"
                disabled :rounded="rounded"
                v-else
                :class="
                    cn(
                        'w-9 h-9 p-0 border-none shadow-none disabled:bg-transparent',
                        props.btnClass
                    )
                ">
                {{ index }}
            </Button>
        </template>

        <Button
            variant="outline"
            :disabled="isLastPage"
            :rounded="rounded"
            :class="cn('w-9 h-9 p-0', props.btnClass)"
            @click="next"
            size="icon">
            <Icon :name="nextIconArrow" class="w-4"></Icon>
        </Button>
        <Button
            v-if="lastFirstArrow"
            @click="currentPage = pageCount"
            :disabled="isLastPage"
            :rounded="rounded"
            :class="cn('w-9 h-9 p-0', props.btnClass)"
            variant="outline"
            size="icon">
            <ArrowDoubleRightIcon />
        </Button>
    </div>
</template>
