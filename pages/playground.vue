<script setup lang="ts">
definePageMeta({ layout: 'blank' })
</script>

<template>
  <div class="flex justify-center items-center h-screen">
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
</template>
