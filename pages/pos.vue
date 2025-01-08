<script setup lang="ts">
import { menuCategory } from '@/@fake/data';

const menuIndex = ref(0);
const menus = ref(menuCategory);
</script>

<template>
    <WrapperPages class="min-h-screen">
        <SlideGroup v-model="menuIndex" class="mt-4">
            <SlideGroupItem v-for="(data, index) in menus" :key="index">
                <Card
                    variant="flat"
                    :class="{ 'border-primary': index === menuIndex }"
                    class="transition min-w-28 hover:border-primary duration-300 items-center border-2">
                    <CardContent
                        class="py-2 md:py-4 flex flex-col hover:text-primary gap-1 px-3"
                        :class="
                            index === menuIndex
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

        <div class="grid grid-cols-12 mt-3 gap-3">
            <div v-for="data in 12" :key="data" class="col-span-6 md:col-span-3">
                <Card>
                    <figure
                        class="overflow-hidden rounded-ss-[inherit] rounded-se-[inherit] rounded-es-[unset] rounded-ee-[unset]">
                        <img height="90"
                            src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=3176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Shoes" />
                    </figure>
                    <CardContent class="mt-3"> hello </CardContent>
                </Card>
            </div>
        </div>
    </WrapperPages>
</template>

<style scoped></style>
