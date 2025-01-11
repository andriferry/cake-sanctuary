<script setup lang="ts">
const tabs = ref([
    {
        title: 'Dine In',
        value: 'dine-in',
        icon: 'tabler:building-store',
    },
    {
        title: 'Take Away',
        value: 'take-away',
        icon: 'tabler:basket',
    },
]);
</script>

<template>
    <div class="mt-3 px-2 flex flex-col gap-3">
        <FormControl
            modelValue="John Doe"
            prepend-icon="tabler:user"
            placeholder="Input Customer Name" />
        <Tabs default-value="dine-in" class="w-full">
            <TabsList class="grid w-full bg-transparent gap-3 grid-cols-2">
                <TabsTrigger
                    v-for="(dataTabs, index) in tabs"
                    :key="index"
                    :value="dataTabs.value"
                    :prepend-icon="dataTabs.icon">
                    <span>{{ dataTabs.title }}</span>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    </div>
</template>
