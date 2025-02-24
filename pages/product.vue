<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
// const route = useRoute()
</script>

<template>
  <WrapperPages class="min-h-screen">
    <Card subtitle="Let's manage your product">
      <CardContent>
        <div class="grid py-3 gap-4 md:grid-cols-4">
          <div class="flex flex-col p-3">
            <p class="font-medium text-sm">
              Total Product Menu
            </p>

            <div class="flex gap-1 my-2 items-end">
              <p class="font-bold text-5xl">
                200
              </p>
              <Badge>+2</Badge>
            </div>

            <p class="font-base text-secondary text-sm">
              last week
            </p>
          </div>
          <div class="bg-primary p-3">
            02
          </div>
          <div class="bg-primary p-3">
            03
          </div>
          <div class="bg-primary p-3">
            04
          </div>
        </div>
      </CardContent>
    </Card>
  </WrapperPages>
</template>
