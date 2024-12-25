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
                    7 Days Ago
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
                        </DialogDescription>

                        <!-- <DialogFooter> Save changes </DialogFooter> -->
                    </DialogContent>
                </Dialog>

                <!-- <Select v-model="selectModel">
                    <SelectTrigger class="w-[180px] font-weight">
                        <SelectValue placeholder="Select a Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Date Range</SelectLabel>
                            <SelectItem v-for="data , index in options" :key="index" :value="data.value"> 
                                {{ data.title }} 
                            </SelectItem>
                            <SelectItem value="custom">
                                Custom Range
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select> -->
            </div>
        </div>
    </div>
</template>

<style scoped></style>
