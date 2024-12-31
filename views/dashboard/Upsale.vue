<script setup lang="ts">
const upsale = ref([
    {
        icon: 'noto:croissant',
        title: 'Croissant',
        amount: '150',
    },
    {
        icon: 'noto:doughnut',
        title: 'Doughnut',
        amount: '200',
    },
    {
        icon: 'noto:french-fries',
        title: 'French Fries',
        amount: '400',
    },
    {
        icon: 'noto:hot-beverage',
        title: 'Coffee',
        amount: '130',
    },
]);
</script>

<template>
    <Card title="Today's upsale" class="h-full">
        <CardContent class="flex flex-col gap-5">
            <div
                v-for="(data, index) in upsale"
                :key="index"
                class="flex items-center gap-4">
                <div class="flex items-center p-2 bg-accent rounded-md">
                    <Icon :name="data.icon" class="text-3xl"></Icon>
                </div>

                <div class="">
                    <p class="font-semibold text-md">
                        {{ data.title }}
                    </p>
                    <p class="text-muted-foreground text-xs font-medium">
                        Order: {{ data.amount }}
                    </p>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<style scoped></style>
