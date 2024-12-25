<script setup lang="ts">

</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="plain" size="icon">
                <Icon name="tabler:bell" class="text-secondary" />

                <Indicator pingAnimate content="5" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="text-secondary w-96">
            <Card variant="flat" class="text-secondary">
                <CardHeader class="px-4">
                    <CardTitle class="flex capitalize justify-between">
                        <span>Notifications</span>

                        <Badge> 5 New </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent class="px-4">
                    <Button v-for="data in 5" :key="data" variant="ghost" size="full" class="justify-start">
                        <div class="flex justify-between w-full items-center">
                            <div
                                class="flex justify-start items-start flex-col">
                                <h6 class="font-medium text-sm">
                                    New orders #3566
                                </h6>
                                <span
                                    class="truncate text-xs font-light text-secondary/70">
                                    There new orders please check it
                                </span>
                            </div>

                            <span class="text-sm font-light">Today</span>
                        </div>
                    </Button>
                </CardContent>
                <CardFooter class="flex justify-between px-4 pb-6">
                    <Button size="full">Read All Notifications</Button>
                </CardFooter>
            </Card>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped></style>
