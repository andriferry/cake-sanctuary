<script lang="ts" setup>
definePageMeta({ layout: 'blank' })
const search = ref<string>('')

const sampleDataHeaders = ref([
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Species',
    key: 'species',
  },
  {
    title: 'Diet HEader',
    key: 'diet',
  },
  {
    title: 'Habitat HEader',
    key: 'habitat',
  },
])

const sampleDataTable = ref([{
  name: 'African Elephant',
  species: 'Loxodonta africana',
  diet: 'Herbivore',
  habitat: 'Savanna, Forests',
}])
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
        <DataTableDemo
          :headers="sampleDataHeaders"
          :items="sampleDataTable"
        />
      </CardContent>
    </Card>
  </div>
</template>
