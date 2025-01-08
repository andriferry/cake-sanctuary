<script setup lang="ts">

const menu = ref(0);
const menus = ref([
    {
        title: 'Main Course',
        items: 12,
        icon: 'tabler:star-filled',
        value: 'main',
    },
    {
        title: 'Healthy Food',
        items: 12,
        icon: 'icon-park-outline:vegetables',
        value: 'healthy',
    },
    {
        title: 'Fast Food',
        items: 12,
        icon: 'icon-park-outline:hamburger-one',
    },
    {
        title: 'Beverage',
        items: 12,
        icon: 'icon-park-outline:tea',
    },
]);
</script>

<template>
    <WrapperPages class="min-h-screen">
        <div class="flex flex-col justify-between gap-6">
            <SlideGroup v-model="menu">
                <SlideGroupItem v-for="(data, index) in menus" :key="index">
                    <Card
                        variant="flat"
                        :class="{ 'border-primary': index === menu }"
                        class="transition min-w-28 hover:border-primary duration-300 items-center border-2">
                        <CardContent
                            class="py-4 flex flex-col hover:text-primary gap-1 px-3"
                            :class="
                                index === menu
                                    ? 'text-primary'
                                    : 'text-secondary/80'
                            ">
                            <div class="flex items-center gap-3">
                                <Icon :name="data.icon" class="size-7" />

                                <h3 class="font-bold block md:hidden">
                                    {{ data.title }}
                                </h3>
                            </div>

                            <div
                                class="justify-between hidden md:flex items-center gap-6">
                                <h3 class="font-bold">
                                    {{ data.title }}
                                </h3>
                                <span class="font-medium text-end text-xs">
                                    {{ data.items }} Items
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </SlideGroupItem>
            </SlideGroup>
        </div>

        <div class="grid grid-cols-12 gap-3">
            <div>Hello</div>
        </div>
    </WrapperPages>
</template>

<style scoped></style>
