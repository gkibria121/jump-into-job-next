import React from 'react';
import { useUserContext } from '../UserContext/UserContext';
import { Navigate, useLocation } from 'next/link';

const EmployersPrivateRoute = ({children}) => {
    const { userData } = useUserContext();
    const location = useLocation()
    if(userData) {
        return children;
    }
    return <Navigate to="/foremployers/register" state={{from: location}}></Navigate>
};

export default EmployersPrivateRoute;