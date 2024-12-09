<script setup lang="ts"></script>

<template>
    <div class="w-full grid grid-cols-12 h-screen bg-black text-white">
        <div
            class="hidden lg:flex md:col-span-2 h-full justify-between flex-col">
            <!-- <Sidebar /> -->
        </div>

        <div class="col-span-12 lg:col-span-10 h-screen overflow-y-auto">
            <Card class="w-full bg-inherit h-full border-none rounded-none">
                <CardHeader
                    class="flex-row items-center justify-between md:justify-start">
                    <div class="flex items-center lg:hidden">
                        <Sheet>
                            <!-- <SheetTrigger as-child>
                                <button class="rounded-full p-2">
                                    <AlignLeft class="text-gray-400" />
                                </button>
                            </SheetTrigger> -->

                            <SheetContent side="left">
                                <div
                                    class="flex flex-col h-full justify-between">
                                    <ScrollArea>
                                        <!-- <Sidebar /> -->
                                    </ScrollArea>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div
                        class="w-[250px] bg-[#292c2d] ml-3 !mt-0 flex py-2 px-3 rounded-sm gap-3">
                        <Search class="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            class="w-full bg-transparent focus:outline-none focus:border-none text-white" />
                    </div>
                </CardHeader>

                <CardContent>
                    <slot />
                </CardContent>
            </Card>
        </div>
    </div>
</template>

<style scoped></style>
