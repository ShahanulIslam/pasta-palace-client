import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location =useLocation();
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} replace to="/login"></Navigate>
};

export default PrivateRoute;