import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    // Sample data - in a real app, this would come from props or API calls
    const stats = [
        {
            name: 'Total Siswa',
            value: '1,234',
            change: '+12%',
            changeType: 'positive',
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
            )
        },
        {
            name: 'Total Guru',
            value: '89',
            change: '+5%',
            changeType: 'positive',
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            name: 'Total Kelas',
            value: '24',
            change: '+2%',
            changeType: 'positive',
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            name: 'Kehadiran Hari Ini',
            value: '95%',
            change: '+3%',
            changeType: 'positive',
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    const recentActivities = [
        { id: 1, action: 'Siswa baru mendaftar', user: 'Ahmad Rizki', time: '2 menit lalu', type: 'success' },
        { id: 2, action: 'Guru mengabsen kelas', user: 'Bu Sari', time: '5 menit lalu', type: 'info' },
        { id: 3, action: 'Pembayaran SPP berhasil', user: 'Orang tua Ani', time: '10 menit lalu', type: 'success' },
        { id: 4, action: 'Jadwal pelajaran diupdate', user: 'Admin', time: '15 menit lalu', type: 'warning' },
        { id: 5, action: 'Raport semester selesai', user: 'Wali Kelas', time: '20 menit lalu', type: 'success' }
    ];

    const quickActions = [
        { name: 'Tambah Siswa', icon: '👨‍🎓', href: '#', color: 'bg-blue-500 hover:bg-blue-600' },
        { name: 'Data Guru', icon: '👩‍🏫', href: '#', color: 'bg-green-500 hover:bg-green-600' },
        { name: 'Absensi', icon: '📋', href: '#', color: 'bg-purple-500 hover:bg-purple-600' },
        { name: 'Raport', icon: '📊', href: '#', color: 'bg-orange-500 hover:bg-orange-600' },
        { name: 'SPP', icon: '💰', href: '#', color: 'bg-yellow-500 hover:bg-yellow-600' },
        { name: 'Jadwal', icon: '📅', href: '#', color: 'bg-indigo-500 hover:bg-indigo-600' }
    ];

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">
                            Selamat datang, {props.auth.user.name}!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Berikut adalah ringkasan aktivitas sekolah hari ini.
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="text-sm text-gray-500">
                            {new Date().toLocaleDateString('id-ID', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </div>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-xl border border-gray-100 dark:border-gray-700">
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                                                {stat.icon}
                                            </div>
                                        </div>
                                        <div className="ml-4 w-0 flex-1">
                                            <dl>
                                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                                                    {stat.name}
                                                </dt>
                                                <dd className="flex items-baseline">
                                                    <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                                        {stat.value}
                                                    </div>
                                                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                                                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                        {stat.change}
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Quick Actions */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-100 dark:border-gray-700">
                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                                        Aksi Cepat
                                    </h3>
                                    <div className="space-y-3">
                                        {quickActions.map((action, index) => (
                                            <a
                                                key={index}
                                                href={action.href}
                                                className={`${action.color} text-white px-4 py-3 rounded-lg flex items-center space-x-3 transition duration-200 transform hover:scale-105`}
                                            >
                                                <span className="text-xl">{action.icon}</span>
                                                <span className="font-medium">{action.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activities */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-100 dark:border-gray-700">
                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                                        Aktivitas Terbaru
                                    </h3>
                                    <div className="space-y-4">
                                        {recentActivities.map((activity) => (
                                            <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                                                <div className={`w-2 h-2 rounded-full ${
                                                    activity.type === 'success' ? 'bg-green-500' :
                                                    activity.type === 'error' ? 'bg-red-500' :
                                                    activity.type === 'warning' ? 'bg-yellow-500' :
                                                    'bg-blue-500'
                                                }`}></div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                        {activity.action}
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        by {activity.user}
                                                    </p>
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    {activity.time}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <a href="#" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                                            Lihat semua aktivitas →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="mt-8">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-100 dark:border-gray-700">
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                                    Grafik Prestasi Siswa
                                </h3>
                                <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <div className="text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                            Grafik nilai dan prestasi siswa akan ditampilkan di sini
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
