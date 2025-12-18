import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';

const PriviteRoute = ({ children }) => {
    const { user, loading, roleLoading } = use(AuthContext)

    if (loading || roleLoading) {
        return <p>Loading........</p>
    }
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children
};

export default PriviteRoute;