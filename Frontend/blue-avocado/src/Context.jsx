import { useState, useContext, createContext } from "react";

export const StateContext = createContext();
// export const UpdateStateContext = createContext();
export const UserContext = () => {
    return useContext(StateContext)
}

export const Context = ({ children }) => {
    const [userState, setUserState] = useState(null);

    const handleStateChange = (value) => {
        setUserState(value)
    }

    return (
        <>
            <StateContext.Provider value={[userState, handleStateChange]}>
                {/* <UpdateStateContext value={handleStateChange}> */}
                    {children}
                {/* </UpdateStateContext> */}
            </StateContext.Provider>
        </>
    )
}