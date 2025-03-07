export { default as Pagination } from './Pagination.vue'

const {
  floor,
  min,
  max,
} = Math

function range(lo: number, hi: number): number[] {
  return Array.from({ length: hi - lo }, (_, i) => i + lo)
}

export function paginationFunc(count: number, page: number, total: number, ellipsis = '…'): any[] {
  const start = max(1, min(page - floor((count - 3) / 2), total - count + 2))
  const end = min(total, max(page + floor((count - 2) / 2), count - 1))
  return [
    ...(start > 2
      ? [
          1,
          ellipsis,
        ]
      : start > 1 ? [1] : []),
    ...range(start, end + 1),
    ...(end < total - 1
      ? [
          ellipsis,
          total,
        ]
      : end < total ? [total] : []),
  ]
}
