<script setup lang="ts">
import { initialName } from '~/utils';

import { ChevronsUpDown } from 'lucide-vue-next';

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
                            <ChevronsUpDown class="ml-auto size-4" />
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
                            <DropdownMenuItem>
                                <Icon name="tabler:sparkles"></Icon>
                                Upgrade to Pro
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Icon
                                    class="text-lg"
                                    name="tabler:rosette-discount-check"></Icon>
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon
                                    class="text-lg"
                                    name="tabler:credit-card"></Icon>
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon class="text-lg" name="tabler:bell"></Icon>
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Icon class="text-lg" name="tabler:logout"></Icon>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarFooter>
</template>

<style scoped></style>
