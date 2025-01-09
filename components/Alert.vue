<script setup lang="ts"></script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="plain" size="icon">
                <Icon name="tabler:bell" class="text-secondary" />

                <Indicator pingAnimate content="5" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="text-secondary w-96 p-0">
            <Card variant="flat" class="text-secondary">
                <CardHeader class="px-3.5">
                    <CardTitle class="flex capitalize justify-between">
                        <span>Notifications</span>

                        <Badge> 5 New </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent class="px-3.5">
                    <Button variant="ghost" size="full" class="justify-start">
                        <div
                            class="flex p-1 justify-between w-full items-center">
                            <div class="flex gap-3">
                                <div
                                    class="bg-primary/30 flex items-center justify-center rounded-full size-10">
                                    <Icon
                                        name="tabler:brand-paypal"
                                        class="text-primary size-6"></Icon>
                                </div>
                                <div
                                    class="flex justify-start items-start flex-col">
                                    <h6 class="font-medium text-base">
                                        Paypal
                                    </h6>
                                    <span
                                        class="truncate text-xs font-light text-secondary/70">
                                        Received Payment for
                                        <span class="font-medium">#3566</span>
                                    </span>
                                </div>
                            </div>

                            <small class="text-xs">Yesterday</small>
                        </div>
                    </Button>

                    <Button variant="ghost" size="full" class="justify-start">
                        <div
                            class="flex p-1 justify-between w-full items-center">
                            <div class="flex gap-3">
                                <div
                                    class="bg-secondary/30 flex items-center justify-center rounded-full size-10">
                                    <Icon
                                        name="tabler:message"
                                        class="text-secondary size-6"></Icon>
                                </div>
                                <div
                                    class="flex justify-start items-start flex-col">
                                    <h6 class="font-normal text-base">
                                        New message received
                                    </h6>
                                    <span
                                        class="truncate text-xs font-light text-secondary/70">
                                        You have new message from customer
                                    </span>
                                </div>
                            </div>

                            <small class="text-xs">5 Hours Ago</small>
                        </div>
                    </Button>

                    <Button variant="ghost" size="full" class="justify-start">
                        <div
                            class="flex p-1 justify-between w-full items-center">
                            <div class="flex gap-3">
                                <div
                                    class="bg-success/30 flex items-center justify-center rounded-full size-10">
                                    <Icon
                                        name="tabler:circle-check"
                                        class="text-success size-6"></Icon>
                                </div>
                                <div
                                    class="flex justify-start items-start flex-col">
                                    <h6 class="font-normal text-base">
                                        Congratulation New Order !
                                    </h6>
                                    <span
                                        class="truncate text-xs font-light text-secondary/70">
                                        You have new order from John Doe
                                    </span>
                                </div>
                            </div>

                            <small class="text-xs">Today</small>
                        </div>
                    </Button>


                </CardContent>
                <CardFooter class="flex justify-between px-3.5 pb-3.5">
                    <Button size="full">Read All Notifications</Button>
                </CardFooter>
            </Card>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<style scoped></style>
