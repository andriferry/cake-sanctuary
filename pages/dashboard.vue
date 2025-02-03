<script setup lang="ts">
// definePageMeta({
//     middleware: 'auth',
// });

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
    <WrapperPages>
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

            <div class="col-span-12">
                <DashboardRecentTransaction />
            </div>
        </div>

        <Dialog v-model:open="dialogOpen">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Date Range</DialogTitle>
                </DialogHeader>

                <DialogDescription>
                    <RadioGroup v-model="selectModel">
                        <RadioGroupItem
                            v-for="(data, index) in options"
                            :key="index"
                            v-bind="data" />
                    </RadioGroup>

                    <div class="mt-4">
                        <DatePickerRange :disabled="selectModel !== 'custom'" />
                    </div>
                </DialogDescription>

                <DialogFooter>
                    <Button @click="dialogOpen = !dialogOpen">
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </WrapperPages>
</template>

<style scoped></style>
