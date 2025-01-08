<script setup lang="ts">
import { menuCategory, menus, type Menu } from '@/@fake/data';

const menuIndex = ref(0);
const menusCategory = ref(menuCategory);
const allMenus = computed(() => {
    let category = menusCategory.value[menuIndex.value].value;

    return menus.filter((item: Menu) => {
        if (item.category?.includes(category)) return item;
    });
});
</script>

<template>
    <WrapperPages class="min-h-screen">
        <SlideGroup v-model="menuIndex" class="mt-4">
            <SlideGroupItem v-for="(data, index) in menusCategory" :key="index">
                <Card
                    variant="flat"
                    :class="{ 'border-primary': index === menuIndex }"
                    class="transition min-w-[198px] hover:border-primary duration-300 items-center border-2">
                    <CardContent
                        class="py-2 md:py-4 flex flex-col hover:text-primary gap-1 px-3"
                        :class="
                            index === menuIndex
                                ? 'text-primary'
                                : 'text-secondary/80'
                        ">
                        <div class="flex items-center gap-3">
                            <Icon :name="data?.icon" class="size-7" />

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

        <div class="grid grid-cols-12 mt-3 gap-3">
            <div
                v-for="(data, index) in allMenus"
                :key="index"
                class="col-span-6 md:col-span-2">
                <Card class="h-auto cursor-pointer">
                    <figure
                        class="overflow-hidden rounded-ss-[inherit] rounded-se-[inherit] rounded-es-[unset] rounded-ee-[unset]">
                        <AspectRatio :ratio="16 / 14">
                            <img
                                class="object-cover w-full h-full"
                                :src="data.img"
                                :alt="data.title" />
                        </AspectRatio>
                    </figure>
                    <CardContent class="mt-1 p-3 min-h-[40px]">
                        <div class="font-medium">
                            <h2 class="truncate">{{ data.title }}</h2>

                            <span class="text-secondary text-sm">
                                {{
                                    data.price?.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    })
                                }}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </WrapperPages>
</template>

<style scoped></style>
