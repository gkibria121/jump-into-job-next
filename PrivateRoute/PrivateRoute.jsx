import React from 'react';
import { useUserContext } from '../UserContext/UserContext';
import { Navigate, useLocation } from 'next/link';

const PrivateRoute = ({children}) => {
    const { userData } = useUserContext();
    const location = useLocation()
    if(userData) {
        return children;
    }
    return <Navigate to="/signin" state={{from: location}}></Navigate>
};

export default PrivateRoute;