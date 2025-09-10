import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: route('dashboard'), icon: '📊', current: route().current('dashboard') },
        { name: 'Siswa', href: '#', icon: '👨‍🎓', current: false },
        { name: 'Guru', href: '#', icon: '👩‍🏫', current: false },
        { name: 'Kelas', href: '#', icon: '🏫', current: false },
        { name: 'Absensi', href: '#', icon: '📋', current: false },
        { name: 'Raport', href: '#', icon: '📊', current: false },
        { name: 'SPP', href: '#', icon: '💰', current: false },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Navigation */}
            <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/" className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">S</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-900 dark:text-gray-100">SekolahKu</span>
                                </Link>
                            </div>

                            <div className="hidden space-x-1 sm:-my-px sm:ml-10 sm:flex">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        href={item.href}
                                        active={item.current}
                                        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            {/* Notifications */}
                            <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition duration-200">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828z" />
                                </svg>
                            </button>

                            {/* User Menu */}
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-lg">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-2">
                                                    {auth.user.name.charAt(0).toUpperCase()}
                                                </div>
                                                {auth.user.name}
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')} className="flex items-center space-x-2">
                                            <span>👤</span>
                                            <span>Profile</span>
                                        </Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button" className="flex items-center space-x-2 text-red-600 hover:text-red-700">
                                            <span>🚪</span>
                                            <span>Log Out</span>
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                        {navigation.map((item) => (
                            <ResponsiveNavLink
                                key={item.name}
                                href={item.href}
                                active={item.current}
                                className="flex items-center space-x-2 px-4 py-2"
                            >
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                            </ResponsiveNavLink>
                        ))}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                        <div className="px-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-medium">
                                    {auth.user.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                        {auth.user.name}
                                    </div>
                                    <div className="font-medium text-sm text-gray-500 dark:text-gray-400">{auth.user.email}</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')} className="flex items-center space-x-2">
                                <span>👤</span>
                                <span>Profile</span>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button" className="flex items-center space-x-2 text-red-600 hover:text-red-700">
                                <span>🚪</span>
                                <span>Log Out</span>
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            {header && (
                <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            {/* Main Content */}
            <main className="flex-1">{children}</main>
        </div>
    );
}
