<script setup lang="ts">
const { icons } = useAppConfig();

const data = ref({
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  navMain: [
    {
      title: 'Playground',
      url: '#',
      isActive: false,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
});
</script>

<template>
    <SidebarMenu>
        <Collapsible
            v-for="(item, index) in data.navMain"
            :key="index"
            as-child
            :default-open="item.isActive"
            class="group/collapsible">
            <SidebarMenuItem>
                <CollapsibleTrigger as-child>
                    <SidebarMenuButton :tooltip="item.title">
                        <Icon
                            name="file-icons:cakephp"
                            class="text-lg shrink-0" />
                        <span>{{ item.title }}</span>
                        <Icon
                            :name="icons.chevronRight"
                            class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem
                            v-for="subItem in item.items"
                            :key="subItem.title">
                            <SidebarMenuSubButton as-child>
                                <a :href="subItem.url">
                                    <span>{{ subItem.title }}</span>
                                </a>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    </SidebarMenu>
</template>
