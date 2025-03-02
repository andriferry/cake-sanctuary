<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import type { DateRange } from 'radix-vue'
import type { Ref } from 'vue'
import { PopoverTrigger } from '@/components/ui/popover'
import {
  CalendarDate,
  DateFormatter,

  getLocalTimeZone,
} from '@internationalized/date'

interface Props {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), { disabled: false })

const df = new DateFormatter('en-US', { dateStyle: 'medium' })

const value = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
}) as Ref<DateRange>

function formatDate(date?: DateValue) {
  if (date)
    return df.format(date.toDate(getLocalTimeZone()))
}

const currentDateRange = computed(() => {
  return `${formatDate(value.value.start)} - ${formatDate(value.value.end)}`
})

const disabledTemplate = computed(() => {
  return props.disabled ? 'div' : PopoverTrigger
})
</script>

<template>
  <Popover>
    <component
      :is="disabledTemplate"
      as-child
    >
      <Button
        prepend-icon="tabler:calendar-event"
        variant="outline"
        :disabled="disabled"
        class="w-[280px] justify-start text-left font-normal"
        :class="[
          !value && 'text-muted-foreground',
        ]"
      >
        <template v-if="value.start">
          <span v-if="value.end">
            {{ currentDateRange }}
          </span>

          <span v-else>
            {{ formatDate(value.start) }}
          </span>
        </template>
        <span v-else> Pick a date </span>
      </Button>
    </component>
    <PopoverContent
      disabled
      class="w-auto p-0"
    >
      <RangeCalendar
        v-model="value"
        initial-focus
        :number-of-months="2"
        @update:start-value="
          (startDate) => (value.start = startDate)
        "
      />
    </PopoverContent>
  </Popover>
</template>
