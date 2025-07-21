import { createContext, useContext, useState } from "react"

const AppContextProvider = createContext()
const ContextProvider = ({ children }) => {










    return (
        <AppContextProvider.Provider value={{}}>
            {children}
        </AppContextProvider.Provider>
    )
}

export default ContextProvider

// coustom hooks
export const useAppContextProvider = () => {
    return useContext(AppContextProvider)
};