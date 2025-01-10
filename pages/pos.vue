<script setup lang="ts">
import { menuCategory, menus, type Menu } from '@/@fake/data';
import { convertCurrency } from '@@/lib/utils';

const menuIndex = ref(0);

const menusCategory = computed(() => {
    return menuCategory.map((allMenu: Menu) => {
        let getAllMenu = menus.filter((dataItem: Menu) => {
            if (dataItem.category?.includes(allMenu.value)) return dataItem;
        });
        return {
            ...allMenu,
            items: getAllMenu.length,
        };
    });
});
const allMenus = computed<Menu[]>(() => {
    let category = menusCategory.value[menuIndex.value].value;

    return menus.filter((item: Menu) => {
        if (item.category?.includes(category)) return item;
    });
});


const sheetData = ref(false)
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
                            <Icon :name="data?.icon || ''" class="size-7" />

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
            <Tooltip v-for="(data, index) in allMenus" :key="index">
                <TooltipTrigger class="col-span-6 md:col-span-3 lg:col-span-2">
                    <Card
                        class="h-auto group cursor-pointer hover:border-4 transition-all duration-300 ease-in-out border-primary">
                        <figure
                            class="overflow-hidden rounded-ss-[inherit] rounded-se-[inherit] rounded-es-[unset] rounded-ee-[unset]">
                            <AspectRatio :ratio="16 / 14">
                                <img
                                    class="object-cover w-full group-hover:scale-110 transition-all duration-300 ease-in-out h-full"
                                    :src="data.img"
                                    :alt="data.title" />
                            </AspectRatio>
                        </figure>
                        <CardContent
                            class="mt-1 p-3 text-start min-h-[40px] group-hover:text-primary">
                            <div class="font-medium">
                                <h2 class="truncate">{{ data.title }}</h2>

                                <span
                                    v-if="data.price"
                                    class="text-secondary group-hover:text-primary text-sm">
                                    {{ convertCurrency(data.price) }}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </TooltipTrigger>

                <TooltipContent>
                    <p>{{ data.title }}</p>
                </TooltipContent>
            </Tooltip>
        </div>

        <Button variant="outline" @click="sheetData = !sheetData"> Open {{ sheetData }} </Button>
        <Sheet v-model="sheetData">
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </SheetDescription>
                </SheetHeader>
                <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="name" class="text-right"> Name </Label>
                        <Input
                            id="name"
                            value="Pedro Duarte"
                            class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="username" class="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            value="@peduarte"
                            class="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose as-child>
                        <Button type="submit"> Save changes </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    </WrapperPages>
</template>

<style scoped></style>
