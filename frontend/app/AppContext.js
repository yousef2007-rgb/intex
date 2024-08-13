"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext();

export const Provider = ({ children }) => {
    const [state, setState] = useState({ cart: [] });

    useEffect(() => {
        setState(window.localStorage.getItem("state") ? JSON.parse(window.localStorage.getItem("state")) : { cart: [] })
    }, [])

    const setLocalStorage = (value) => {
        setState(value)
        window.localStorage.setItem("state", JSON.stringify(value))
    }

    return (
        <AppContext.Provider value={{ state, setLocalStorage }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
