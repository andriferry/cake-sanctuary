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

const overview = ref([
    {
        description: 'Total Sales',
        title: '$ 121,412',
        class: 'bg-primary/20 text-primary',
        icon: 'tabler:currency-dollar',
    },
  
    {
        description: 'Total Customers',
        title: '4,324',
        class: 'bg-[#F26627]/20 text-[#F26627]',
        icon: 'tabler:users-group',
    },
    {
        description: 'Total Order',
        title: '5,021',
        class: 'bg-[#15B392]/20 text-[#15B392]',
        icon: 'tabler:bowl-chopsticks',
    },
    {
        description: 'Total Tips',
        title: '$ 1,401',
        class: 'bg-[#7A0BC0]/20 text-[#7A0BC0]',
        icon: 'tabler:wallet',
    },
    

]);

const buttonText = computed(() => {
    let getCurrentData = options.value.find(
        (item) => item.value === selectModel.value
    );

    return getCurrentData?.title;
});
</script>

<template>
    <div class="">
        <div class="w-full lg:p-4 flex flex-col gap-3">
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
            </div>

            <div class="w-full">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div
                        v-for="(data, index) in overview"
                        :key="index"
                        class="col-span-1">
                        <Card>
                            <CardHeader
                                class="flex-row items-center justify-between">
                                <div class="flex gap-2 flex-col">
                                    <CardDescription>
                                        {{ data.description }}
                                    </CardDescription>
                                    <CardTitle class="text-xl font-semibold">
                                        {{ data.title }}
                                    </CardTitle>
                                </div>

                                <div :class="data.class"
                                    class="flex items-center rounded-lg p-2">
                                    <Icon
                                        :name="data.icon"
                                        class="text-inherit"></Icon>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
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
                            <DatePickerRange
                                :disabled="selectModel !== 'custom'" />
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
</template>

<style scoped></style>
