import { createContext, useContext, useState } from "react"
import { categoryShow, freeItemShow } from "./Base_Api_Url";
import axios from "axios";

const AppContextProvider = createContext()
const ContextProvider = ({ children }) => {

    const [handleError, setHandleError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [freeTools, setFreeTools] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const getFreeTools = async (page) => {
        try {
            setIsLoading(true);
            setHandleError(null);

            const response = await axios.get(`${freeItemShow}?page=${page}`);
            if (response && response.data) {
                setFreeTools(response.data.payload);
                setTotalPages(response.data.pagination?.total_page || 1);
            }
        } catch (error) {
            console.log(error.message);
            setHandleError(error.response.data || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    // fetch category
    const [categoryHandleError, setcategoryHandleError] = useState(null);
    const [isCategoryLoading, setIsCategoryLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCategory = async (page) => {
        try {
            setIsCategoryLoading(true);
            setcategoryHandleError(null);

            const response = await axios.get(`${categoryShow}?page=${page}`);
            if (response && response.data) {
                setCategories(response.data.payload);
            }
        } catch (error) {
            console.log(error.message);
            setcategoryHandleError(error.response.data || "Something went wrong");
        } finally {
            setIsCategoryLoading(false);
        }
    }









    return (
        <AppContextProvider.Provider value={{
            handleError, isLoading, freeTools, totalPages, getFreeTools, categoryHandleError, isCategoryLoading, categories, getCategory

        }}>
            {children}
        </AppContextProvider.Provider>
    )
}

export default ContextProvider

// coustom hooks
export const useAppContextProvider = () => {
    return useContext(AppContextProvider)
};