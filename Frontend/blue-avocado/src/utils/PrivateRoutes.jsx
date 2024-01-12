import { Outlet } from 'react-router-dom';
import { UserContext } from "../Context";
import { useContext } from 'react';

const PrivateRoutes = () => {
    const [userState, handleStateChange] = useContext(UserContext)

    return (
        userState ? <Outlet /> : window.location.href = '/'
    )
}

export default PrivateRoutes