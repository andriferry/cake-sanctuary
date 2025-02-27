<script lang="ts" setup>
const search = ref('')
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        Product List

        <FormControl
          v-model="search"
          placeholder="Search..."
          prepend-icon="tabler:search"
        />
      </CardTitle>
    </CardHeader>
  </Card>
</template>
