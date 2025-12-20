import React, { use } from 'react';
import AdminDashBoard from '../../adminDashBoard/AdminDashBoard';
import { AuthContext } from '../../../provider/AuthProvider';
import DonorDashBoard from '../../donorDashBoard/DonorDashBoard';

const MainDashBoard = () => {
    const { role } = use(AuthContext)
    return (
        <div>
            {
                role === "admin" && (
                    <AdminDashBoard></AdminDashBoard>
                )
            }
            {
                role === "donor" && (
                    <DonorDashBoard></DonorDashBoard>
                )
            }
        </div>
    );
};

export default MainDashBoard;