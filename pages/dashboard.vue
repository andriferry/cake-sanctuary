<script setup lang="ts">
const selectModel = ref( '7days' )
const options = ref( [
    {
        title: 'This Week',
        value: '7days'
    },
    {
        title: '30 Days Ago',
        value: '30days'
    },
    {
        title: '3 Month Ago',
        value: '3month'
    }
])
</script>

<template>
    <div class="">
        <div class="w-full p-4 flex flex-col gap-3">
            <div class="flex justify-end gap-3">
                <Button append-icon="tabler:download" size="sm">
                    Export
                </Button>

                <Select v-model="selectModel">
                    <SelectTrigger class="w-[180px] font-weight">
                        <SelectValue placeholder="Select a Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Date Range</SelectLabel>
                            <SelectItem v-for="data , index in options" :key="index" :value="data.value"> 
                                {{ data.title }} 
                            </SelectItem>
                            <!-- <SelectItem value="custom">
                                Hello
                            </SelectItem> -->
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
