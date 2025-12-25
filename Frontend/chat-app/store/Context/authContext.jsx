import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_GENERAL_API}/api/me`,{withCredentials:true});

                setUser(response.data.user);
            } catch (error) {
                console.log("Error while checking auth status: ",error);
                setUser(null);
            }
        }
        checkAuth();
    },[]);

    const Logout = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_GENERAL_API}/api/logout`,{withCredentials:true});
            setUser(null);
        } catch (error) {
            console.log("Error while logout: ",error);
        }
    }

    return <AuthContext.Provider value={{user,
        isAuthenticated: !!user,setUser,logout:Logout}}>
            {children}</AuthContext.Provider>
}