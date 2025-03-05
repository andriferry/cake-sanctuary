<script lang="ts" setup>
import type { Align } from '@/components/ui/table'

import type {
  ColumnDef,
  ColumnFiltersState,
  CoreHeader,
  ExpandedState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'

import { valueUpdater } from '@@/lib/utils'
import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'

interface Headers {
  title: string
  align?: Align
  sortable?: boolean
  key: string
}

interface Props {
  pagination?: boolean
  items: any[]
  headers?: Headers[]
  selectedItemKey?: any
  itemsLength?: 5 | 10 | 25 | 50 | 100 | 'All'
  height?: number // Suport Virtual Scroll
  density?: string // Optionals
  hideDefaultHeader?: boolean
  hideDefaultFooter?: boolean
  showSelect?: boolean
  showExpanded?: boolean // Experimental
  fixedHeader?: boolean
  fixedFooter?: boolean
  headerClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  pagination: true,
  height: 300,
  hideDefaultHeader: false,
  hideDefaultFooter: false,
  showSelect: false,
  itemsLength: 10,
  fixedHeader: false,
  fixedFooter: false,
  headerClass: 'capitalize',
})

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})
const expanded = ref<ExpandedState>({})

const columns: ColumnDef<Headers>[] = []

const table = useVueTable({
  data: props.items,
  columns,
  enableSorting: true,
  enableSortingRemoval: false,
  sortDescFirst: true,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
  onExpandedChange: updaterOrValue => valueUpdater(updaterOrValue, expanded),
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get columnVisibility() { return columnVisibility.value },
    get rowSelection() { return rowSelection.value },
    get expanded() { return expanded.value },
  },

})

watchEffect(() => {
  // Rendering Columns
  if (props.headers?.length) {
    props.headers.forEach((item: Headers) => {
      const obj: ColumnDef<Headers> = {
        accessorKey: item.key,
        header: item.title,
        id: props.selectedItemKey || item.key,
        meta: { ...item },
        cell: ({ row }) => h('div', { class: props.headerClass }, row.getValue(item.key)),
      }

      columns.push(obj)
    })
  }
  else if (props.items.length) {
    for (const header in props.items[0]) {
      columns.push({
        accessorKey: header,
        header,
        id: header,
        meta: {
          title: header,
          sortable: false,
          align: 'items-start',
          key: header,
        },
        cell: ({ row }) => h('div', { class: props.headerClass }, row.getValue(header)),
      })
    }
  }
})

// Method

const toggleSort = (header: CoreHeader<any, unknown>) => {
  header.column.toggleSorting()
}
</script>

<template>
  <div class="grid grid-cols-1">
    <div class="col-span-1">
      <ClientOnly>
        <Table>
          <TableHeader>
            <TableRow
              v-for="(headerGroup, index) in table.getHeaderGroups()"
              :key="index"
            >
              <TableHead
                v-for="(header, headerIndex) in headerGroup.headers"
                :key="headerIndex"
                class="group"
                :class="[headerClass, { 'cursor-pointer': header.column.columnDef.meta?.sortable }]"
                :align="header.column.columnDef.meta?.align || 'items-start'"
                @click="toggleSort(header)"
              >
                <template v-if="!header.isPlaceholder">
                  <slot
                    :header="header"
                    :column="header.column.columnDef.meta"
                    :name="`header:${header.column.columnDef.id}`"
                    :sort="toggleSort"
                  >
                    <FlexRender
                      :render="header.column.columnDef.header"
                      :props="header.getContext()"
                    />
                    <template v-if="header.column.columnDef.meta?.sortable">
                      <Transition
                        name="fade"
                        mode="out-in"
                      >
                        <ArrowUpIcon
                          v-if="!header.column.getIsSorted() || header.column.getIsSorted() === 'asc'"
                          class="group-hover:block hidden"
                        />

                        <ArrowDownIcon
                          v-else
                          class="group-hover:block hidden"
                        />
                      </Transition>
                    </template>
                  </slot>
                </template>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <template v-if="table.getRowModel().rows?.length">
              <template
                v-for="row in table.getRowModel().rows"
                :key="row.id"
              >
                <TableRow :data-state="row.getIsSelected() && 'selected'">
                  <TableCell
                    v-for="cell in row.getVisibleCells()"
                    :key="cell.id"
                  >
                    <FlexRender
                      :render="cell.column.columnDef.cell"
                      :props="cell.getContext()"
                    />
                  </TableCell>
                </TableRow>
              </template>
            </template>

            <TableRow v-else>
              <TableCell
                :colspan="columns.length"
                class="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ClientOnly>
    </div>
  </div>
</template>
