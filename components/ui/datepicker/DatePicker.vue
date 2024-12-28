<script setup lang="ts">
import {
    CalendarDate,
    type DateValue,
    isEqualMonth,
} from '@internationalized/date';

import { type DateRange, RangeCalendarRoot, useDateFormatter } from 'radix-vue';
import { createMonth, type Grid, toDate } from 'radix-vue/date';
import { type Ref } from 'vue';

const { icons } = useAppConfig();

const value = ref({
    start: new CalendarDate(2022, 1, 20),
    end: new CalendarDate(2022, 1, 20).add({ days: 7 }),
}) as Ref<DateRange>;

const locale = ref('en-US');
const formatter = useDateFormatter(locale.value);

const placeholder = ref(value.value.start) as Ref<DateValue>; // It should be computed
const secondMonthPlaceholder = ref(value.value.end) as Ref<DateValue>;

const firstMonth = ref(
    createMonth({
        dateObj: placeholder.value,
        locale: locale.value,
        fixedWeeks: true,
        weekStartsOn: 0,
    })
) as Ref<Grid<DateValue>>;

const secondMonth = ref(
    createMonth({
        dateObj: secondMonthPlaceholder.value,
        locale: locale.value,
        fixedWeeks: true,
        weekStartsOn: 0,
    })
) as Ref<Grid<DateValue>>;

const currentDateRange = computed(() => {
    return `${formatDate(value.value.start)} - ${formatDate(value.value.end)}`;
});

watch(placeholder, (_placeholder) => {
    firstMonth.value = createMonth({
        dateObj: _placeholder,
        weekStartsOn: 0,
        fixedWeeks: false,
        locale: locale.value,
    });
    if (isEqualMonth(secondMonthPlaceholder.value, _placeholder)) {
        secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
            months: 1,
        });
    }
});

watch(secondMonthPlaceholder, (_secondMonthPlaceholder) => {
    secondMonth.value = createMonth({
        dateObj: _secondMonthPlaceholder,
        weekStartsOn: 0,
        fixedWeeks: false,
        locale: locale.value,
    });
    if (isEqualMonth(_secondMonthPlaceholder, placeholder.value))
        placeholder.value = placeholder.value.subtract({ months: 1 });
});

const updateMonth = (reference: 'first' | 'second', months: number) => {
    if (reference === 'first') {
        placeholder.value = placeholder.value.add({ months });
    } else {
        secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
            months,
        });
    }
};

const formatDate = (date?: DateValue) => {
    if (date) return formatter.custom(toDate(date), { dateStyle: 'medium' });
};

const formatFullMonth = (date?: DateValue) => {
    if (date) return formatter.fullMonthAndYear(toDate(date));
};
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                :class="[
                    'w-[280px] justify-start text-left font-normal',
                    !value && 'text-muted-foreground',
                ]"
                variant="outline"
                :prepend-icon="icons.calendarEvent">
                <template v-if="value.start">
                    <span v-if="value.end">
                        {{ currentDateRange }}
                    </span>

                    <template v-else>
                        {{ formatDate(value.start) }}
                    </template>
                </template>
                <template v-else> Pick a date </template>
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
            <RangeCalendarRoot
                v-slot="{ weekDays }"
                v-model="value"
                v-model:placeholder="placeholder"
                class="p-3">
                <div
                    class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center justify-between">
                            <Button
                                @click="updateMonth('first', -1)"
                                variant="outline"
                                size="xs"
                                class="p-0 opacity-50 hover:opacity-100">
                                <ArrowLeftIcon />
                            </Button>

                            <div class="text-sm font-medium">
                                {{ formatFullMonth(firstMonth.value) }}
                            </div>

                            <Button
                                @click="updateMonth('first', 1)"
                                variant="outline"
                                size="xs"
                                class="p-0 opacity-50 hover:opacity-100">
                                <ArrowRightIcon />
                            </Button>
                        </div>
                        <RangeCalendarGrid>
                            <RangeCalendarGridHead>
                                <RangeCalendarGridRow>
                                    <RangeCalendarHeadCell
                                        v-for="day in weekDays"
                                        :key="day"
                                        class="w-full">
                                        {{ day }}
                                    </RangeCalendarHeadCell>
                                </RangeCalendarGridRow>
                            </RangeCalendarGridHead>
                            <RangeCalendarGridBody>
                                <RangeCalendarGridRow
                                    v-for="(
                                        weekDates, index
                                    ) in firstMonth.rows"
                                    :key="`weekDate-${index}`"
                                    class="mt-2 w-full">
                                    <RangeCalendarCell
                                        v-for="(
                                            weekDate, indexWeekDate
                                        ) in weekDates"
                                        :key="indexWeekDate"
                                        :date="weekDate">
                                        <RangeCalendarCellTrigger
                                            :day="weekDate"
                                            :month="firstMonth.value" />
                                    </RangeCalendarCell>
                                </RangeCalendarGridRow>
                            </RangeCalendarGridBody>
                        </RangeCalendarGrid>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center justify-between">
                            <Button
                                @click="updateMonth('second', -1)"
                                variant="outline"
                                size="xs"
                                class="p-0 opacity-50 hover:opacity-100">
                                <ArrowLeftIcon />
                            </Button>

                            <div class="text-sm font-medium">
                                {{ formatFullMonth(secondMonth.value) }}
                            </div>

                            <Button
                                @click="updateMonth('second', 1)"
                                variant="outline"
                                size="xs"
                                class="p-0 opacity-50 hover:opacity-100">
                                <ArrowRightIcon />
                            </Button>
                        </div>
                        <RangeCalendarGrid>
                            <RangeCalendarGridHead>
                                <RangeCalendarGridRow>
                                    <RangeCalendarHeadCell
                                        v-for="day in weekDays"
                                        :key="day"
                                        class="w-full">
                                        {{ day }}
                                    </RangeCalendarHeadCell>
                                </RangeCalendarGridRow>
                            </RangeCalendarGridHead>
                            <RangeCalendarGridBody>
                                <RangeCalendarGridRow
                                    v-for="(
                                        weekDates, index
                                    ) in secondMonth.rows"
                                    :key="`weekDate-${index}`"
                                    class="mt-2 w-full">
                                    <RangeCalendarCell
                                        v-for="(
                                            weekDate, indexWeekDate
                                        ) in weekDates"
                                        :key="indexWeekDate"
                                        :date="weekDate">
                                        <RangeCalendarCellTrigger
                                            :day="weekDate"
                                            :month="secondMonth.value" />
                                    </RangeCalendarCell>
                                </RangeCalendarGridRow>
                            </RangeCalendarGridBody>
                        </RangeCalendarGrid>
                    </div>
                </div>
            </RangeCalendarRoot>
        </PopoverContent>
    </Popover>
</template>
