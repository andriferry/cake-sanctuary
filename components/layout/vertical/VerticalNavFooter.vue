<script setup lang="ts">
import { initialName } from '~/utils';

interface Props {
    user?: {
        name?: string;
        email?: string;
        avatar: string;
    };
}

const { user = { name: '', email: '', avatar: '' } } = defineProps<Props>();
</script>

<template>
    <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <!-- <HoverCard>
                    <HoverCardTrigger as-child>
                        <SidebarMenuButton
                            size="lg"
                            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                            <Avatar
                                class="h-8 w-8 text-white bg-primary rounded-lg">
                                <AvatarImage
                                    :src="user.avatar"
                                    :alt="user.name" />
                                <AvatarFallback class="rounded-lg">
                                    {{ initialName('andri ferry') }}
                                </AvatarFallback>
                            </Avatar>
                            <div
                                class="grid flex-1 text-left text-sm leading-tight">
                                <span class="truncate font-semibold">
                                    {{ user.name }}
                                </span>
                                <span class="truncate text-xs">
                                    {{ user.email }}
                                </span>
                            </div>
                            <Icon
                                name="tabler:square-rounded-arrow-up"
                                class="text-xl text-secondary font-medium" />
                        </SidebarMenuButton>
                    </HoverCardTrigger>
                    <HoverCardContent
                        class="w-[calc(var(--sidebar-width-mobile)-1rem)] lg:w-[calc(var(--sidebar-width)-1rem)]">
                        <div
                            class="grid grid-flow-row auto-rows-max gap-3 divide-y divide-secondary/20">
                            <div
                                class="flex items-center gap-2 py-3 text-left text-sm">
                                <Avatar
                                    class="h-8 w-8 rounded-lg text-white bg-primary">
                                    <AvatarImage
                                        :src="user.avatar"
                                        :alt="user.name" />
                                    <AvatarFallback class="rounded-lg">
                                        {{ initialName('andri ferry') }}
                                    </AvatarFallback>
                                </Avatar>
                                <div
                                    class="grid flex-1 text-left text-sm leading-tight">
                                    <span class="truncate font-semibold">
                                        {{ user.name }}
                                    </span>
                                    <span class="truncate text-xs">
                                        {{ user.email }}
                                    </span>
                                </div>
                            </div>

                            <div class="py-3">theme here</div>

                            <div class="pt-3">
                                <Button variant="plain" class="px-0" append-icon="tabler:logout"> Logout </Button>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard> -->

                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <SidebarMenuButton
                            size="lg"
                            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                            <Avatar
                                class="h-8 w-8 text-white bg-primary rounded-lg">
                                <AvatarImage
                                    :src="user.avatar"
                                    :alt="user.name" />
                                <AvatarFallback class="rounded-lg">
                                    {{ initialName('andri ferry') }}
                                </AvatarFallback>
                            </Avatar>
                            <div
                                class="grid flex-1 text-left text-sm leading-tight">
                                <span class="truncate font-semibold">
                                    {{ user.name }}
                                </span>
                                <span class="truncate text-xs">
                                    {{ user.email }}
                                </span>
                            </div>
                            <Icon
                                name="tabler:square-rounded-arrow-up"
                                class="text-xl text-secondary font-medium" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side="bottom"
                        align="end"
                        :side-offset="4">
                        <DropdownMenuLabel class="p-0 font-normal">
                            <div
                                class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar
                                    class="h-8 w-8 rounded-lg text-white bg-primary">
                                    <AvatarImage
                                        :src="user.avatar"
                                        :alt="user.name" />
                                    <AvatarFallback class="rounded-lg">
                                        {{ initialName('andri ferry') }}
                                    </AvatarFallback>
                                </Avatar>
                                <div
                                    class="grid flex-1 text-left text-sm leading-tight">
                                    <span class="truncate font-semibold">
                                        {{ user.name }}
                                    </span>
                                    <span class="truncate text-xs">
                                        {{ user.email }}
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuGroup>
                            <DropdownMenuItem as-child>
                                <NuxtLink to="/">
                                    <Icon
                                        class="text-lg"
                                        name="tabler:rosette-discount-check"></Icon>
                                    Account
                                </NuxtLink>
                            </DropdownMenuItem>

                            <DropdownMenuItem class="cursor-pointer">
                                <Icon
                                    class="text-lg"
                                    name="tabler:logout"></Icon>
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarFooter>
</template>

<style scoped></style>
