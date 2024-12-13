export default defineAppConfig({
    title: 'Cake Sanctuary',
    navigation: [
        {
            heading: 'Dashboard',
        },
        {
            title: 'Home',
            to: '/',
            icon: 'tabler:smart-home',
        },
        {
            title: 'POS',
            to: '/',
            icon: 'tabler:smart-home',
        },
        {
            title: 'Product',
            to: '/',
            icon: 'tabler:package',
        },
        {
            title: 'Orders',
            to: '/',
            icon: 'tabler--notes',
            badge: '2',
            badgeClass: 'bg-primary',
        },
        {
            title: 'Transaction',
            to: '/',
            icon: 'tabler--arrows-right-left',
        },
        {
            title: 'Settings',
            to: '/',
            icon: 'tabler--settings',
        },
    ],
});
