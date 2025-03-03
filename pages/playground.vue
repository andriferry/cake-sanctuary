<script lang="ts" setup>
definePageMeta({ layout: 'blank' })
const search = ref<string>('')
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
        <DataTable />
      </CardContent>
    </Card>
  </div>
</template>
