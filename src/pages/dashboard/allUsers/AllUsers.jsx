import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { RiMenuSearchLine } from 'react-icons/ri';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const [users, setUsers] = useState([])

    const fetchUser = () => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data.user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchUser()
    }, [axiosSecure])

    console.log(users);

    const handleStatusChange = (email, status) => {
        axiosSecure.patch(`/update/user/status?email=${email}&status=${status}`)
            .then(res => {
                console.log(res.data);
                fetchUser()
            })

    }

    const handleroleChange = (email, role) => {
        axiosSecure.patch(`/update/role?email=${email}&role=${role}`)
            .then(res => {
                console.log(res.data);
                fetchUser()
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        // <div className="overflow-x-auto">
        //     <table className="table">
        //         {/* head */}
        //         <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Role</th>
        //                 <th>Status</th>
        //                 <th>Actions</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {/* row 1 */}
        //             {
        //                 users?.map(user =>
        //                     <tr>
        //                         <td>
        //                             <div className="flex items-center gap-3">
        //                                 <div className="avatar">
        //                                     <div className="mask mask-squircle h-12 w-12">
        //                                         <img
        //                                             src={user?.mainPhoto}
        //                                             alt="Avatar Tailwind CSS Component" />
        //                                     </div>
        //                                 </div>
        //                                 <div>
        //                                     <div className="font-bold">{user?.name}</div>
        //                                     <div className="text-sm opacity-50">{user?.email}</div>
        //                                 </div>
        //                             </div>
        //                         </td>
        //                         <td>
        //                             {user?.role}
        //                         </td>
        //                         <td>{user?.status}</td>
        //                         <td>
        //                             <div className="dropdown dropdown-end">
        //                                 <label
        //                                     tabIndex={0}

        //                                 >
        //                                     <RiMenuSearchLine size={24} />
        //                                 </label>

        //                                 <ul
        //                                     tabIndex={0}
        //                                     className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
        //                                 >
        //                                     {user?.status === "active" ? (
        //                                         <li>
        //                                             <button
        //                                                 onClick={() =>
        //                                                     handleStatusChange(
        //                                                         user?.email,
        //                                                         "blocked"
        //                                                     )
        //                                                 }
        //                                                 className="text-red-500"
        //                                             >
        //                                                 Block User
        //                                             </button>
        //                                         </li>
        //                                     ) : (
        //                                         <li>
        //                                             <button
        //                                                 onClick={() =>
        //                                                     handleStatusChange(
        //                                                         user?.email,
        //                                                         "active"
        //                                                     )
        //                                                 }
        //                                                 className="text-green-500"
        //                                             >
        //                                                 Unblock User
        //                                             </button>
        //                                         </li>
        //                                     )}

        //                                     <li>
        //                                         <button
        //                                             onClick={() =>
        //                                                 handleroleChange(user?.email, "volunteer")
        //                                             }
        //                                         >
        //                                             Make Volunteer
        //                                         </button>
        //                                     </li>

        //                                     <li>
        //                                         <button
        //                                             onClick={() =>
        //                                                 handleroleChange(user?.email, "admin")
        //                                             }
        //                                         >
        //                                             Make Admin
        //                                         </button>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                         </td>

        //                     </tr>
        //                 )
        //             }
        //         </tbody>
        //     </table>
        // </div>
        <div className="py-10 px-4 min-h-screen">
            <div className="overflow-x-auto">
                <table className="min-w-full rounded-xl shadow-lg overflow-hidden">
                    {/* Table Head */}
                    <thead className="bg-red-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">User</th>
                            <th className="py-3 px-6 text-left">Role</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {users?.map((user) => (
                            <tr
                                key={user?._id}
                                className="hover:bg-red-50 transition duration-200"
                            >
                                {/* User Info */}
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-red-400">
                                            <img
                                                src={user?.mainPhoto}
                                                alt={user?.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">
                                                {user?.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {user?.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* Role */}
                                <td className="py-4 px-6 capitalize font-medium">
                                    {user?.role}
                                </td>

                                {/* Status */}
                                <td className="py-4 px-6">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold
                                    ${user?.status === "active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {user?.status}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="py-4 px-6 text-center relative">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="cursor-pointer">
                                            <RiMenuSearchLine size={22} />
                                        </label>

                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-44"
                                        >
                                            {user?.status === "active" ? (
                                                <li>
                                                    <button
                                                        onClick={() => handleStatusChange(user?.email, "blocked")}
                                                        className="text-red-500"
                                                    >
                                                        Block User
                                                    </button>
                                                </li>
                                            ) : (
                                                <li>
                                                    <button
                                                        onClick={() => handleStatusChange(user?.email, "active")}
                                                        className="text-green-500"
                                                    >
                                                        Unblock User
                                                    </button>
                                                </li>
                                            )}

                                            {user?.role !== "volunteer" && (
                                                <li>
                                                    <button onClick={() => handleroleChange(user?.email, "volunteer")}>
                                                        Make Volunteer
                                                    </button>
                                                </li>
                                            )}

                                            {user?.role !== "admin" && (
                                                <li>
                                                    <button onClick={() => handleroleChange(user?.email, "admin")}>
                                                        Make Admin
                                                    </button>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;