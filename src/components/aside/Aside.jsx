import React, { use } from 'react';
import { FiHome, FiLogOut, FiSettings, FiUsers } from 'react-icons/fi';
import { NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Aside = () => {
    const { role, logOut } = use(AuthContext)

    const handleLogout = () => {
        // console.log('user try to logout');
        logOut()
            .then(() => {
                toast.success('Logged out successfully')
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <aside className="min-h-screen w-64 bg-gray-900 text-gray-200 border-r flex flex-col">
            {/* Logo */}
            <div className="text-2xl font-bold mb-10 text-white tracking-wide border-b">
                Admin Panel
            </div>


            {/* Navigation */}
            <nav className="flex-1 flex flex-col gap-3">
                <NavLink to='/dashboard'
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-blue-600 text-white" :
                            "hover:bg-gray-7000"
                        }`}>
                    <FiHome className='h-5 w-5' />
                    Dashboard
                </NavLink>

                {
                    role == 'donor' && (<NavLink to='/dashboard/add-request'
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-blue-600 text-white" :
                                "hover:bg-gray-7000"
                            }`}>
                        <FiHome className='h-5 w-5' />
                        Add Request
                    </NavLink>)
                }

                {
                    role == 'admin' && (<NavLink to='/dashboard/all-users'
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-blue-600 text-white" :
                                "hover:bg-gray-7000"
                            }`}>
                        <FiHome className='h-5 w-5' />
                        All Users
                    </NavLink>)
                }

                <NavLink to='/dashboard/users'
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-blue-600 text-white" :
                            "hover:bg-gray-7000"
                        }`}>
                    <FiUsers className='h-5 w-5' />
                    Users
                </NavLink>

                <NavLink to='/dashboard/settings'
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-blue-600 text-white" :
                            "hover:bg-gray-7000"
                        }`}>
                    <FiSettings className='h-5 w-5' />
                    Settings
                </NavLink>
            </nav>


            {/* Footer */}
            <div className="p-4 border-t">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm 
                    font-medium text-red-600 hover:bg-red-50 transition">
                    <FiLogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Aside;