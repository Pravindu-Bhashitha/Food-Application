// import { FiHome, FiStar } from 'react-icons/fi';
// import Feedback from "../../views/Feedback";

// export default [
//     {
//         id: 'home',
//         titel: 'Home',
//         icon: <FiHome />,
//         navLink: '/home',
//         resourse: 'home'
//     },
//     {
//         id: 'dashboard',
//         titel: 'Dashboard',
//         icon: <FiStar />,
//         navLink: '/dashboard',
//         resourse: 'dashboard'
//     },
//     {
//         id: 'feedback',
//         titel: 'Feedback',
//         icon: <FiStar />,
//         navLink: '/feedback',
//         resourse: 'feedback'
//     },
//     {
//         id: 'reports',
//         titel: 'Reports',
//         icon: <FiStar />,
//         navLink: '/reports',
//         resourse: 'reports'
//     },
//     {
//         id: 'menu',
//         titel: 'Menu',
//         icon: <FiStar />,
//         navLink: '/menu',
//         resourse: 'menu'
//     },
//     {
//         id: 'holiday_hours',
//         titel: 'Holiday Hours',
//         icon: <FiStar />,
//         navLink: '/holiday_hours',
//         resourse: 'holiday_hours'
//     },
//     {
//         id: 'marketing',
//         titel: 'Marketing',
//         icon: <FiStar />,
//         navLink: '/marketing',
//         resourse: 'marketing'
//     },
//     {
//         id: 'preparation_time',
//         titel: 'Preparation Time',
//         icon: <FiStar />,
//         navLink: '/preparation_time',
//         resourse: 'preparation_time'
//     },
//     {
//         id: 'users',
//         titel: 'Users',
//         icon: <FiStar />,
//         navLink: '/users',
//         resourse: 'users'
//     },
//     {
//         id: 'documents',
//         titel: 'Documents',
//         icon: <FiStar />,
//         navLink: '/documents',
//         resourse: 'documents'
//     },
//     {
//         id: 'settings',
//         titel: 'Settings',
//         icon: <FiStar />,
//         navLink: '/settings',
//         resourse: 'settings'
//     },
// ]

import { faHome, faChartBar, faComments, faUtensils, faCalendarAlt, faBullhorn, faClock, faUsers, faFileAlt, faCog } from '@fortawesome/free-solid-svg-icons'; 

export default [
    {
        id: 'home',
        title: 'Home',
        icon: faHome,
        navLink: '/home',
        resource: 'home'
    },
    {
        id: 'dashboard',
        title: 'Dashboard',
        icon: faChartBar,
        navLink: '/dashboard',
        resource: 'dashboard'
    },
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
        id: 'menu',
        title: 'Menu',
        icon: faUtensils,
        navLink: '/menu',
        resource: 'menu'
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
]
