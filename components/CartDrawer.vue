<script setup lang="ts">
import { tables, type Table } from '@@/@fake/data';
const tableDialog = ref(false);
const dataTable = ref(tables);
const tab = ref('take-away');
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

const eventClickTable = (event: Table['status']) => {
    if (event === 'available') {
        return 'click';
    } else return null;
};
</script>

<template>
    <div class="h-screen w-[--sidebar-width]">
        <div class="border-b p-4 flex items-center">
            <div class="font-medium w-full">
                <p class="truncate">Current Order</p>

                <span class="text-secondary font-medium text-xs">
                    #123456
                </span>
            </div>
        </div>
        <div class="mt-3 px-2 flex flex-col gap-3">
            <FormControl
                modelValue="John Doe"
                prepend-icon="tabler:user"
                placeholder="Input Customer Name" />

            <Label> Where will you eat: </Label>

            <Tabs v-model="tab" class="w-full">
                <TabsList class="grid w-full bg-transparent gap-3 grid-cols-2">
                    <TabsTrigger
                        v-for="(dataTabs, index) in tabs"
                        :key="index"
                        :value="dataTabs.value"
                        :prepend-icon="dataTabs.icon">
                        <span>{{ dataTabs.title }}</span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="dine-in">
                    <div class="flex flex-col gap-3">
                        <Label> Select Table </Label>

                        <Button
                            @click="tableDialog = !tableDialog"
                            variant="outline"
                            class="flex hover:border-primary hover:text-primary hover:bg-transparent justify-between">
                            <span>Select table</span>

                            <Icon name="tabler:arrow-narrow-right"></Icon>
                        </Button>
                    </div>
                </TabsContent>
                <TabsContent value="take-away">
                    <div class="flex flex-col gap-3">
                        <Label> Packaging </Label>

                        <Button
                            @click="tableDialog = !tableDialog"
                            variant="outline"
                            class="flex hover:border-primary hover:text-primary hover:bg-transparent justify-between">
                            <span>Select table</span>

                            <Icon name="tabler:arrow-narrow-right"></Icon>
                        </Button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>

        <Dialog v-model:open="tableDialog">
            <DialogContent class="xl:max-w-5xl">
                <DialogHeader>
                    <DialogTitle class="">
                        <div class="flex flex-col lg:flex-row gap-2 lg:gap-28">
                            <p>Choose Table</p>

                            <div class="flex items-center gap-3">
                                <div class="flex items-center gap-1">
                                    <div class="available" />
                                    <p class="text-xs">Available</p>
                                </div>
                                <div class="flex items-center gap-1">
                                    <div class="filled" />
                                    <p class="text-xs">Filled</p>
                                </div>
                                <div class="flex items-center gap-1">
                                    <div class="reserved" />
                                    <p class="text-xs">Reserved</p>
                                </div>
                            </div>
                        </div>
                    </DialogTitle>
                </DialogHeader>

                <DialogDescription>
                    <ScrollArea class="h-96 w-full">
                        <div class="w-full grid gap-6 grid-cols-5">
                            <div
                                v-for="(data, index) in dataTable"
                                :key="index"
                                class="col-span-5 md:col-span-1 rounded-md"
                                @[eventClickTable(data.status)]="
                                    data.active = !data.active
                                "
                                :class="[
                                    {
                                        'cursor-pointer':
                                            data.status === 'available',
                                    },
                                    { 'border-2 border-primary': data.active },
                                ]">
                                <Card variant="flat" class="">
                                    <CardContent
                                        class="p-2 grid gap-3"
                                        :class="
                                            data.chair === 3
                                                ? 'grid-cols-3'
                                                : 'grid-cols-2'
                                        ">
                                        <div
                                            v-for="chair in data.chair"
                                            :key="chair"
                                            :class="{
                                                active:
                                                    data.status !== 'available',
                                            }"
                                            class="chair col-span-1" />

                                        <div
                                            class="table"
                                            :class="[
                                                data.chair === 3
                                                    ? 'col-span-3'
                                                    : 'col-span-2',
                                                {
                                                    'active text-white':
                                                        data.status !==
                                                        'available',
                                                },
                                            ]">
                                            <div
                                                class="flex items-center text-inherit gap-2">
                                                <div :class="data.status" />
                                                <p>
                                                    {{ data.value }}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            v-for="chair in data.chair"
                                            :key="chair"
                                            :class="{
                                                active:
                                                    data.status !== 'available',
                                            }"
                                            class="chair col-span-1" />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </ScrollArea>
                </DialogDescription>

                <DialogFooter>
                    <Button> Continue </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
</template>

<style lang="postcss" scoped>
.chair {
    @apply h-8 rounded-md bg-accent;
}

.active {
    @apply !bg-secondary/60;
}

.table {
    @apply h-14 flex items-center justify-center rounded-md bg-accent;
}

.available {
    @apply size-2.5 rounded-full bg-success;
}

.filled {
    @apply size-2.5 rounded-full bg-primary;
}

.reserved {
    @apply size-2.5 rounded-full bg-destructive;
}
</style>
