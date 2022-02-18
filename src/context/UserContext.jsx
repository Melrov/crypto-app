import React, { createContext, useCallback, useState } from 'react'

export const UserContext = createContext(null)

function UserProvider(props) {
    const [activeUser, setActiveUser] = useState(null)

    const login = useCallback((user) => {
        setActiveUser(user)
    }, [])

    const logout = useCallback(() => {
        setActiveUser(null)
    }, [])

    return (
        <UserContext.Provider value={{ activeUser, login, logout }}>{props.children}</UserContext.Provider>
    )
}

export default UserProvider