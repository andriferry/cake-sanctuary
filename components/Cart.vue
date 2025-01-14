<script setup lang="ts">
import { convertCurrency } from '@@/lib/utils';

const { getAllProduct } = useCartStore();
const { icons } = useAppConfig();
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="plain" size="icon">
                <Icon name="tabler:shopping-cart" class="text-secondary" />

                <Indicator :content="`${getAllProduct.length}`" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="text-secondary h-full w-96 p-0">
            <Card variant="flat" class="text-secondary">
                <CardHeader class="px-3.5 pb-3 border-b border-secondary/10">
                    <CardTitle class="flex capitalize justify-between">
                        <span>Cart</span>

                        <NuxtLink to="/" class="text-primary text-sm">
                            See
                        </NuxtLink>
                    </CardTitle>
                </CardHeader>
                <CardContent class="p-1">
                    <ScrollArea class="h-96">
                        <ul class="[&_li:last-child]:border-0">
                            <li
                                v-for="(data, index) in getAllProduct"
                                :key="index"
                                class="border-b p-1.5 border-secondary/10">
                                <Button
                                    variant="ghost"
                                    size="full"
                                    class="justify-start">
                                    <div
                                        class="flex p-1 justify-between w-full items-center">
                                        <div class="flex gap-3">
                                            <Avatar v-if="data?.img" shape="square">
                                                <AvatarImage
                                                    :src="data?.img"
                                                    :alt="data?.title" />
                                            </Avatar>

                                            <div
                                                class="flex justify-start items-start flex-col">
                                                <h6
                                                    class="font-medium w-52 text-start truncate text-base">
                                                    {{ data?.title }}
                                                </h6>
                                                <span
                                                    class="truncate text-xs font-medium text-secondary/70">
                                                    {{ data?.qty }} x
                                                    <template
                                                        v-if="data?.price">
                                                        {{
                                                            convertCurrency(
                                                                data?.price
                                                            )
                                                        }}
                                                    </template>

                                                    <template
                                                        v-if="
                                                            data?.qty &&
                                                            data?.price
                                                        ">
                                                        =
                                                        {{
                                                            convertCurrency(
                                                                data?.qty *
                                                                    data?.price
                                                            )
                                                        }}
                                                    </template>
                                                </span>
                                            </div>
                                        </div>

                                        <Button size="icon" variant="plain">
                                            <Icon
                                                :name="icons.delete"
                                                class="text-destructive size-5" />
                                        </Button>
                                    </div>
                                </Button>
                            </li>
                        </ul>
                    </ScrollArea>
                </CardContent>
            </Card>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped></style>
