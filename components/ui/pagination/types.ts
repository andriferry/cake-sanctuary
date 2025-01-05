import { type ButtonVariants } from '@/components/ui/button/index';
import type { HTMLAttributes } from 'vue';

export interface Props {
    length?: number;
    nextIcon?: string;
    prevIcon?: string;
    rounded?: ButtonVariants['rounded'];
    class?: HTMLAttributes['class'];
    currentPage?: number;
    pageSize?: number;
    lastFirstArrow?: boolean;
}

export interface PaginationFetch {
    currentPage: number;
    currentPageSize: number;
}

export interface Emit {
    onChange: [value: PaginationFetch];
}
