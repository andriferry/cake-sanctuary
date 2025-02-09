import type { ButtonVariants } from '@/components/ui/button/index'

export interface PaginationProps {
  length?: number
  nextIcon?: string
  prevIcon?: string
  rounded?: ButtonVariants['rounded']
  class?: VueHtmlAttributes['class']
  btnClass?: VueHtmlAttributes['class']
  currentPage?: number
  pageSize?: number
  lastFirstArrow?: boolean
  visible?: number
  activeClass?: VueHtmlAttributes['class']
  size?: ButtonVariants['size']
}

export interface PaginationFetch {
  currentPage: number
  currentPageSize: number
}

export interface Emit {
  onChange: [value: PaginationFetch]
}
