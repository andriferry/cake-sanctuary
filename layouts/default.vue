<script setup lang="ts">

</script>

<template>
    <SidebarProvider>
        <NavigationDrawer></NavigationDrawer>
        <SidebarInset>
            <header
                class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div class="flex items-center gap-2 px-4">
                    <SidebarTrigger class="-ml-1" />
                    <Separator orientation="vertical" class="mr-2 h-4" />
                    <h2
                        class="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                        Dashboard
                    </h2>
                </div>
            </header>
            <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
                <!-- hover:bg-sidebar-accent 
                hover:text-sidebar-accent-foregound -->
                <!-- <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div class="aspect-video rounded-xl bg-muted/50" />
                    <div class="aspect-video rounded-xl bg-muted/50" />
                    <div class="aspect-video rounded-xl bg-muted/50" />
                </div> -->

                <slot />
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>
