<script lang="ts" setup>
const search = ref('')
</script>

<template>
  <Card>
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
              <DropdownMenuItem>Refresh</DropdownMenuItem>
              <DropdownMenuItem>Add Product</DropdownMenuItem>
              <DropdownMenuItem>Download</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardTitle>
    </CardHeader>
  </Card>
</template>
