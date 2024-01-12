import { Button } from "antd";
import { UserContext } from "../Context";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    const [userState, handleStateChange] = UserContext()

    const handleClick = () => {
        if (userState) {
            handleStateChange(null)
            window.location = "/login"
        } else {
            window.location = "/login"
        }
    }

    return (
        <div className="flex justify-between w-full h-20 px-7 items-center shadow border-b">
            <NavLink to="/" >
                <h1 className="font-bold text-blue-500 text-2xl">Donasila</h1>
            </NavLink>
            {/* <Button type="primary" onClick={handleClick} className="bg-blue-500 h-10 w-20 text-md font-semibold">{userState? "Logout" : "Login"}</Button> */}
        </div>
    )
}