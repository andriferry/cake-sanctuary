<script setup lang="ts">
const selectModel = ref('7days');
const options = ref([
    {
        title: 'This Week',
        value: '7days',
    },
    {
        title: '30 Days Ago',
        value: '30days',
    },
    {
        title: '3 Month Ago',
        value: '3month',
    },
    {
        title: 'Custom Range',
        value: 'custom',
    },
]);

const dialogOpen = ref(false);


const buttonText = computed(() => {
    let getCurrentData = options.value.find(
        (item) => item.value === selectModel.value
    );

    return getCurrentData?.title;
});


</script>

<template>
    <div class="grid lg:p-4 gap-3 grid-flow-row auto-rows-max">
        <div class="flex justify-end gap-3">
            <Button append-icon="tabler:download" size="sm"> Export </Button>

            <Button
                size="sm"
                variant="outline"
                @click="dialogOpen = !dialogOpen">
                {{ buttonText }}
            </Button>
        </div>

        <DashboardOverview />

        <div class="grid grid-cols-12 gap-3">
            <div class="col-span-12 xl:col-span-3">
                <DashboardUpsale />
            </div>

            <div class="col-span-12 xl:col-span-9">
                <DashboardYearlyAnalytics />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
