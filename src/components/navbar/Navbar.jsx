import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

import { Link, NavLink } from 'react-router';
import { FaDroplet } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { FaHeartbeat } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

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
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
            {/* <div className=''>{user && user.email}</div> */}
            <div className="flex items-center gap-2 mb-3">
                <FaHeartbeat className="text-3xl text-red-600" />
                <h2 className="text-2xl font-bold tracking-wide">Drop Life</h2>
            </div>
            <div className="nav flex flex-col md:flex-row gap-5 items-center">
                <NavLink to="/" className={({ isActive }) => isActive ?
                    "text-red-700 underline" : ""}>Home</NavLink>
                <NavLink to="/donation-request" className={({ isActive }) => isActive ?
                    "text-red-700 underline" : ""}>Donation Request</NavLink>
                {
                    user && (
                        <>
                            <NavLink to="search" className={({ isActive }) => isActive ?
                                "text-red-700 underline" : ""}>Search</NavLink>
                            <NavLink to="donation" className={({ isActive }) => isActive ?
                                "text-red-700 underline" : ""}>Donation</NavLink>
                        </>
                    )
                }

            </div>

            <div className='flex justify-center items-center gap-4'>
                {
                    user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User Avatar"
                                        src={user.photoURL || 'https://img.icons8.com/?size=64&id=115318&format=png'}
                                    />
                                </div>
                            </div>



                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >

                                <li>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">
                                            Light
                                        </span>
                                        <input
                                            onChange={(e) => handleTheme(e.target.checked)}
                                            type="checkbox"
                                            defaultChecked={localStorage.getItem('theme') === "dark"}
                                            className="toggle"
                                        />
                                        <span className="text-sm font-medium">
                                            Dark
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <span className="font-semibold">
                                        {user.displayName || user.email}
                                    </span>
                                </li>
                                <li>
                                    <Link to='/dashboard' className='btn bg-red-600'>My Dashboard</Link>
                                </li>
                                {/* <li>
                                    <span className="font-semibold">
                                        <Link to='/myprofile'>Update Profile</Link>
                                    </span>
                                </li> */}

                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>

                        </div>
                    ) : (
                        <div className='flex gap-3'>
                            <div className="login-btn">
                                <Link to='/login' className="btn btn-primary px-10 ">Login</Link>
                            </div>
                            <div className="login-btn">
                                <Link to='/signup' className="btn btn-primary px-10 ">Sign Up</Link>
                            </div>
                        </div>
                    )
                }


            </div>

        </div>
    );
};

export default Navbar;