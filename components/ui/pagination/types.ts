import type { ButtonVariants } from '@/components/ui/button/index'
import type { HTMLAttributes } from 'vue'

export interface PaginationProps {
  length?: number
  nextIcon?: string
  prevIcon?: string
  rounded?: ButtonVariants['rounded']
  class?: HTMLAttributes['class']
  btnClass?: HTMLAttributes['class']
  currentPage?: number
  pageSize?: number
  lastFirstArrow?: boolean
  visible?: number
  activeClass?: HTMLAttributes['class']
  size?: ButtonVariants['size']
}

export interface PaginationFetch {
  currentPage: number
  currentPageSize: number
}

export interface Emit {
  onChange: [value: PaginationFetch]
}
