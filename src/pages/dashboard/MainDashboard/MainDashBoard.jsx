import React, { use } from 'react';
import AdminDashBoard from '../../adminDashBoard/AdminDashBoard';
import { AuthContext } from '../../../provider/AuthProvider';

const MainDashBoard = () => {
    const { role } = use(AuthContext)
    return (
        <div>
            {
                role === "admin" && (
                    <AdminDashBoard></AdminDashBoard>
                )
            }
        </div>
    );
};

export default MainDashBoard;