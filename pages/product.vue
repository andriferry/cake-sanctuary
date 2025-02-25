<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <WrapperPages class="min-h-screen">
    <Card>
      <CardContent class="py-4">
        <div class="grid py-3 gap-4 lg:grid-cols-4">
          <div class="flex flex-col p-3">
            <p class="font-medium text-sm">
              Total Product Menu
            </p>

            <div class="flex gap-1 my-2 items-end">
              <p class="font-bold text-3xl">
                200
              </p>
              <Badge>+2</Badge>
            </div>

            <p class="font-base text-secondary text-sm">
              last week
            </p>
          </div>

          <div class="flex flex-col p-3">
            <p class="font-medium text-sm">
              Total Product Category
            </p>

            <div class="flex gap-1 my-2 items-end">
              <p class="font-bold text-3xl">
                50
              </p>
            </div>
          </div>

          <div class="flex flex-col p-3">
            <p class="font-medium text-sm">
              Purchase invoice
            </p>

            <div class="flex gap-1 my-2 items-end">
              <p class="font-bold text-3xl">
                30
              </p>
              <Badge>+2</Badge>
            </div>

            <p class="font-base text-secondary text-sm">
              last week
            </p>
          </div>

          <div class="flex flex-col p-3">
            <p class="font-medium text-sm">
              Monthly Income
            </p>

            <div class="flex gap-1 my-2 items-end">
              <p class="font-bold text-3xl">
                $ 5,190
              </p>
              <Badge variant="destructive">
                -10%
              </Badge>
            </div>

            <p class="font-base text-secondary text-sm">
              last week
            </p>
          </div>

          <!-- <div class="bg-primary p-3">
            03
          </div>
          <div class="bg-primary p-3">
            04
          </div> -->
        </div>
      </CardContent>
    </Card>
  </WrapperPages>
</template>
