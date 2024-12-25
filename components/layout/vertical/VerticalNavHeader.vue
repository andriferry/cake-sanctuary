<script setup lang="ts">
const { title } = useAppConfig();
</script>

<template>
    <SidebarHeader>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    class="data-[state=open]:bg-sidebar-primary data-[state=open]:text-sidebar-accent-foreground">
                    <div
                        class="flex aspect-square size-8 items-center justify-center rounded-lg text-primary">
                        <LogoIcon />
                    </div>
                    <div class="grid flex-1 text-left text-lg leading-tight">
                        <span class="truncate text-primary font-semibold">
                            {{ title }}
                        </span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
</template>
