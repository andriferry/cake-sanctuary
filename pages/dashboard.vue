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


const buttonText = computed( () => {
    let getCurrentData = options.value.find((item) => item.value === selectModel.value)

    return getCurrentData?.title
})
</script>

<template>
    <div class="">
        <div class="w-full p-4 flex flex-col gap-3">
            <div class="flex justify-end gap-3">
                <Button append-icon="tabler:download" size="sm">
                    Export
                </Button>

                <Button
                    size="sm"
                    variant="outline"
                    @click="dialogOpen = !dialogOpen">
                    {{ buttonText }}
                </Button>

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
                                <DatePicker />
                            </div>

                        </DialogDescription>

                        <DialogFooter> 
                            <Button @click="dialogOpen = !dialogOpen">
                                Save changes
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
