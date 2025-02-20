import type { Updater } from '@tanstack/vue-table'
import type { ClassValue } from 'clsx'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const breakpoints = useBreakpoints(breakpointsTailwind)

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref): any {
  ref.value = typeof updaterOrValue === 'function' ? updaterOrValue(ref.value) : updaterOrValue
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const months = (config: { count: number, section: number }): string[] => {
  const cfg = config || {}
  const count = cfg.count || 12
  const section = cfg.section
  const values = []
  let i, value

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12]
    values.push(value.substring(0, section))
  }

  return values
}

export const hexToRGBA = (hex: string, alpha: number): string => {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number): string => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)

    const result = Math.round(255 * color)
      .toString(16)
      .padStart(2, '0') // convert to Hex and prefix "0" if needed

    return result
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export const convertCurrency = (
  price: number,
  lang = 'en-US',
  currency = 'USD',
): string => {
  return price.toLocaleString(lang, {
    style: 'currency',
    currency,
  })
}
