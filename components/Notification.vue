<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="plain"
        size="icon"
      >
        <Icon
          name="tabler:bell"
          class="text-secondary"
        />

        <Indicator
          ping-animate
          content="3"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      class="text-secondary w-96 p-0"
    >
      <Card
        variant="flat"
        class="text-secondary"
      >
        <CardHeader class="px-3.5 pb-3 border-b border-secondary/10">
          <CardTitle class="flex capitalize justify-between">
            <span>Notifications</span>

            <Badge> 3 New </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent class="p-1">
          <ul class="[&_li:last-child]:border-0">
            <li class="border-b p-1.5 border-secondary/10">
              <Button
                variant="ghost"
                size="full"
                class="justify-start"
              >
                <div class="flex p-1 justify-between w-full items-center">
                  <div class="flex gap-3">
                    <div class="bg-primary/30 text-primary flex items-center justify-center rounded-full size-10">
                      <Icon
                        name="tabler:brand-paypal"
                        class="size-6"
                      />
                    </div>
                    <div class="flex justify-start items-start flex-col">
                      <h6 class="font-medium text-base">PayPal</h6>
                      <span class="truncate text-xs font-light text-secondary/70">
                        Received Payment for
                        <span class="font-medium"> #3566 </span>
                      </span>
                    </div>
                  </div>

                  <small class="text-xs">Yesterday</small>
                </div>
              </Button>
            </li>

            <li class="border-b p-1.5 border-secondary/10">
              <Button
                variant="ghost"
                size="full"
                class="justify-start"
              >
                <div class="flex p-1 justify-between w-full items-center">
                  <div class="flex gap-3">
                    <div class="bg-secondary/30 text-secondary flex items-center justify-center rounded-full size-10">
                      <Icon
                        name="tabler:message"
                        class="size-6"
                      />
                    </div>
                    <div class="flex justify-start items-start flex-col">
                      <h6 class="font-normal text-base">New message received</h6>
                      <span class="truncate text-xs font-light text-secondary/70">
                        You have new message from customer
                      </span>
                      <small class="font-base truncate"> 5 Hours Ago </small>
                    </div>
                  </div>
                </div>
              </Button>
            </li>

            <li class="border-b p-1.5 border-secondary/10">
              <Button
                variant="ghost"
                size="full"
                class="justify-start"
              >
                <div class="flex p-1 justify-between w-full items-center">
                  <div class="flex gap-3">
                    <div class="bg-success/30 text-success flex items-center justify-center rounded-full size-10">
                      <Icon
                        name="tabler:circle-check"
                        class="size-6"
                      />
                    </div>
                    <div class="flex justify-start items-start flex-col">
                      <h6 class="font-normal text-base">Congratulation New Order !</h6>
                      <span class="truncate text-xs font-light text-secondary/70">
                        You have new order from John Doe
                      </span>
                    </div>
                  </div>

                  <small class="text-xs">Today</small>
                </div>
              </Button>
            </li>
          </ul>
        </CardContent>
        <CardFooter class="flex justify-between border-t border-secondary/10 px-3.5 py-3.5">
          <Button size="full"> Read All Notifications </Button>
        </CardFooter>
      </Card>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
