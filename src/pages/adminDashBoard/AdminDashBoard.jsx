import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaHandHoldingUsd, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';

const AdminDashBoard = () => {
    const axiosSecure = useAxiosSecure()
    const [user, setUser] = useState('')
    const [totalRequest, setTotalRequest] = useState("")


    useEffect(() => {
        axiosSecure.get("/users")
            .then(res => {
                setUser(res.data.totaluser)
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })

        axiosSecure.get(`/all-request`)
            .then((res) => {
                console.log(res.data);
                setTotalRequest(res.data.totalRequest);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [axiosSecure])


    return (
        <section className="w-full py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* TOTAL USERS */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md 
      hover:shadow-xl transition-all duration-300 group">

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />

                    <div className="p-6 flex items-center justify-between">
                        <div>
                            <p className="text-xs tracking-widest text-gray-500 font-semibold">
                                TOTAL USERS
                            </p>
                            <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                {user}
                            </h2>
                        </div>

                        <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-purple-100 text-purple-600 group-hover:scale-110 transition">
                            <FaUsers className="text-3xl" />
                        </div>
                    </div>
                </div>

                {/* TOTAL FUNDING */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md 
      hover:shadow-xl transition-all duration-300 group">

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />

                    <div className="p-6 flex items-center justify-between">
                        <div>
                            <p className="text-xs tracking-widest text-gray-500 font-semibold">
                                TOTAL FUNDING
                            </p>
                            <h2 className="text-3xl font-bold text-gray-800 mt-2 flex items-center gap-2">
                                <GiTakeMyMoney className="text-green-600" />
                            </h2>
                        </div>

                        <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-green-100 text-green-600 group-hover:scale-110 transition">
                            <FaHandHoldingUsd className="text-3xl" />
                        </div>
                    </div>
                </div>

                {/* TOTAL REQUEST */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md 
      hover:shadow-xl transition-all duration-300 group">

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-500" />

                    <div className="p-6 flex items-center justify-between">
                        <div>
                            <p className="text-xs tracking-widest text-gray-500 font-semibold">
                                TOTAL REQUEST
                            </p>
                            <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                {totalRequest}
                            </h2>
                        </div>

                        <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-red-100 text-red-600 group-hover:scale-110 transition">
                            <FaHeartbeat className="text-3xl" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default AdminDashBoard;