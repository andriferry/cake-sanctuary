<script setup lang="ts">
interface Props {
    to?: string;
    icon?: string | undefined;
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  icon: undefined,
});
</script>

<template>
    <SidebarMenuItem>
        <SidebarMenuButton :tooltip='props.title' as-child size="lg">
            <NuxtLink
                v-bind="props"
                active-class="bg-primary transition-all duration-300 ease-in-out hover:!bg-primary/90 !text-white hover:!text-white">
                <div
                    v-if="props.icon"
                    class="flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Icon :name="props.icon" class="shrink-0" />
                </div>
                <span>{{ props.title }}</span>
            </NuxtLink>
        </SidebarMenuButton>
    </SidebarMenuItem>
</template>
