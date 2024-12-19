import { sidebar } from '@/themeconfig';
export default defineAppConfig({
    title: 'Cake Sanctuary',
    navigations: [
        {
            heading: 'Dashboard',
        },
        {
            title: 'Home',
            to: '/',
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
        {
            title: 'Orders',
            to: '/order',
            icon: 'tabler:notes',
            badge: '2',
            badgeClass: 'bg-primary',
        },
        {
            title: 'Transaction',
            to: '/transaction',
            icon: 'tabler:arrows-right-left',
        },
        {
            title: 'Settings',
            to: '/settings',
            icon: 'tabler:settings',
        },
    ],
    sidebar: {
        ...sidebar,
    },
});
