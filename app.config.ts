import { sidebar } from '@/themeconfig'

export default defineAppConfig({
  title: 'Cake Sanctuary',
  navigations: [
    {
      heading: 'Dashboard',
    },
    {
      title: 'Home',
      to: '/dashboard',
      icon: 'tabler:smart-home',
      // target: "_blank"
    },
    {
      title: 'POS',
      to: '/pos',
      icon: 'tabler:layout-dashboard',
    },
    {
      title: 'Product',
      to: '/product',
      icon: 'tabler:package',
    },
    // {
    //     title: 'Orders',
    //     to: '/order',
    //     icon: 'tabler:notes',
    //     badge: '2',
    //     badgeClass: 'bg-primary',
    // },
    // {
    //     title: 'Transaction',
    //     to: '/transaction',
    //     icon: 'tabler:arrows-right-left',
    // },
    // {
    //     title: 'Settings',
    //     to: '/settings',
    //     icon: 'tabler:settings',
    // },
  ],
  sidebar: {
    ...sidebar,
  },
  icons: {
    dropdownRadioItem: 'tabler:circle-dot',
    radioItemIcon: 'tabler:circle-filled',
    eyeIconOff: 'mdi:eye-off-outline',
    eyeIcon: 'mdi:eye-outline',
    sidebarTrigger: 'tabler:layout-sidebar',
    calendarEvent: 'tabler:calendar-event',
    chevronLeft: 'tabler:chevron-left',
    doubleChevronLeft: 'tabler:chevrons-left',
    chevronRight: 'tabler:chevron-right',
    doubleChevronRight: 'tabler:chevrons-right',
    chevronDown: 'tabler:chevron-down',
    chevronUp: 'tabler:chevron-up',
    close: 'tabler:x',
    edit: 'tabler:edit',
    delete: 'tabler:trash',
    dragHandle: 'tabler:grip-vertical',
    minus: 'tabler:minus',
    plus: 'tabler:plus',
    alertTriangle: 'tabler:alert-triangle',
  },
})
