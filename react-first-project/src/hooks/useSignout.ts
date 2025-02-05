import { useState } from "react";
import { signout } from "../services/auth-service";
import { useAuthContext } from "./AuthContext";


export const useSignout = () => {
    const [error, setError] = useState<String>("");
    const [isLoading, setLoader] = useState<boolean>(false);
    const { updateAuth } = useAuthContext();
    
    const logout = () => {
        setLoader(true),
            signout()
                .then((response) => {
                    if (response && response.status === 204) {
                        localStorage.clear();
                        updateAuth(false);
                    }
                })
                .catch((error) => setError(error))
                .finally(() => setLoader(false));
    }
    return { logout};
}