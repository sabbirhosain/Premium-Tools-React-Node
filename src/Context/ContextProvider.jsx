import { createContext, useContext, useState } from "react"

const AppContextProvider = createContext()
const ContextProvider = ({ children }) => {
    // checkout data
    const [selectedPackage, setSelectedPackage] = useState({});
    const [itemDetails, setItemDetails] = useState({});

    const selectPackage = (pkg, item) => {
        setSelectedPackage(pkg);
        setItemDetails(item);
    };

    console.log(selectedPackage);
    console.log(itemDetails);









    return (
        <AppContextProvider.Provider value={{ selectedPackage, itemDetails, selectPackage }}>
            {children}
        </AppContextProvider.Provider>
    )
}

export default ContextProvider

// coustom hooks
export const useAppContextProvider = () => {
    return useContext(AppContextProvider)
};