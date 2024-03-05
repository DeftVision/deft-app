import { useContext } from 'react';
import UserContext from "./UserContext";
import { Outlet, Navigate } from 'react-router-dom';


export default function PrivateRoutes() {
    const {user} = useContext(UserContext);
    return user ? <Outlet /> : <Navigate to="/" />;

}