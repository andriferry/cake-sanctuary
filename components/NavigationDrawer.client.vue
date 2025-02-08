<script setup lang="ts">
import VerticalNavLink from '@/components/layout/vertical/VerticalNavLink.vue'
import VerticalNavTitle from '@/components/layout/vertical/VerticalNavTitle.vue'

interface NavData {
  heading?: string
  title?: string
  to?: string
  icon?: string
  childrem?: any[]
}

const { navigations } = useAppConfig()

function isComponent(component: NavData) {
  if ('heading' in component)
    return VerticalNavTitle

  return VerticalNavLink
}
</script>

<template>
  <Sidebar
    collapsible="icon"
    class="!border-none"
  >
    <VerticalNavHeader />

    <SidebarContent>
      <SidebarGroup class="">
        <SidebarMenu>
          <component
            v-bind="{ ...nav }"
            :is="isComponent(nav)"
            v-for="(nav, index) in navigations"
            :key="index"
          />
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <VerticalNavFooter />
  </Sidebar>
</template>
