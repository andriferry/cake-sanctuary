<script lang="ts" setup>
import type {
  ColumnDef,
  ColumnFiltersState,
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
import { Button } from '~/components/ui/button/index'

import { SortIcon } from '~/components/ui/global/index'

definePageMeta({ layout: 'blank' })

export interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
]

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('status')),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => [
        'Email',
        h(SortIcon, { class: 'ml-2 h-4 w-4' }),
      ])
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
  },
  {
    accessorKey: 'amount',
    header: () => h('div', 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'font-medium' }, formatted)
    },
  },
]

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})
const expanded = ref<ExpandedState>({})
const search = ref<string>('')

const table = useVueTable({
  data,
  columns,
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
</script>

<template>
  <div class="flex h-screen p-10 justify-center items-center">
    <Card class="w-full">
      <CardHeader>
        <CardTitle class="flex md:items-center flex-col md:flex-row justify-between">
          Product List

          <div class="flex justify-between md:justify-center gap-3 items-center">
            <FormControl
              v-model="search"
              placeholder="Search..."
              prepend-icon="tabler:search"
            />

            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button
                  variant="outline"
                  size="icon"
                  rounded="lg"
                >
                  <Icon
                    name="tabler:adjustments-horizontal"
                    class="size-5"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                :align-offset="10"
              >
                <DropdownMenuLabel>Columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  v-for="(column, index) in table.getAllColumns().filter((column: any) => column.getCanHide())"
                  :key="index"
                  class="capitalize"
                  :model-value="column.getIsVisible()"
                  @update:model-value="(value: any) => {
                    column.toggleVisibility(!!value)
                  }"
                >
                  {{ column.id }}
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuItem>Add Product</DropdownMenuItem>
                <DropdownMenuItem>Download</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent class="">
        <Table>
          <TableHeader>
            <TableRow
              v-for="(headerGroup, index) in table.getHeaderGroups()"
              :key="index"
            >
              <TableHead
                v-for="(header, headerIndex) in headerGroup.headers"
                :key="headerIndex"
              >
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
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
      </CardContent>
    </Card>
  </div>
</template>
