import { faHome, faChartBar, faComments, faUtensils, faCalendarAlt, faBullhorn, faClock, faUsers, faFileAlt, faCog, faCreditCard } from '@fortawesome/free-solid-svg-icons'; 

export default [
    {
        id: 'home',
        title: 'Home',
        icon: faHome,
        navLink: '/home',
        resource: 'home'
    },
    // {
    //     id: 'dashboard',
    //     title: 'Dashboard',
    //     icon: faChartBar,
    //     navLink: '/dashboard',
    //     resource: 'dashboard'
    // },
    {
        id: 'feedback',
        title: 'Feedback',
        icon: faComments,
        navLink: '/feedback',
        resource: 'feedback'
    },
    {
        id: 'reports',
        title: 'Reports',
        icon: faChartBar,
        navLink: '/reports',
        resource: 'reports'
    },
    {
        id: 'payemnts',
        title: 'Payments',
        icon: faCreditCard,
        navLink: '/payments',
        resource: 'payments'
    },
    {
        id: 'menu',
        title: 'Menu',
        icon: faUtensils,
        navLink: '/menu/resource',
        resource: 'menu',
        submenu: [
            {
                id: 'menu-resource',
                title: 'Resource',
                icon: faUtensils,
                navLink: '/menu/resource',
                resource: 'menu/resource'
            },
            {
                id: 'menu-subscriptions',
                title: 'Subscriptions',
                icon: faUtensils,
                navLink: '/menu/subscriptions',
                resource: 'menu/subscriptions'
            }
        ]
    },
    {
        id: 'holiday_hours',
        title: 'Holiday Hours',
        icon: faCalendarAlt,
        navLink: '/holiday_hours',
        resource: 'holiday_hours'
    },
    {
        id: 'marketing',
        title: 'Marketing',
        icon: faBullhorn,
        navLink: '/marketing',
        resource: 'marketing'
    },
    {
        id: 'preparation_time',
        title: 'Preparation Time',
        icon: faClock,
        navLink: '/preparation_time',
        resource: 'preparation_time'
    },
    {
        id: 'users',
        title: 'Users',
        icon: faUsers,
        navLink: '/users',
        resource: 'users'
    },
    {
        id: 'documents',
        title: 'Documents',
        icon: faFileAlt,
        navLink: '/documents',
        resource: 'documents'
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: faCog,
        navLink: '/settings',
        resource: 'settings'
    },
];
