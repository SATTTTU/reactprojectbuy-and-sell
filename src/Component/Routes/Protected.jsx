import { useState, useEffect } from "react";
import { useAuth } from "../../Context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function Protected() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth(); // Assuming useAuth() returns an array with the auth state as the first element

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get('/api/v1/auth/user-auth');

                if (response.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Error checking authentication status:", error);
                setOk(false); // Handle error gracefully
            }
        };

        if (auth?.token) {
            checkAuthStatus();
        }
    }, [auth?.token]); // Dependency array

    return ok ? <Outlet /> : <Spinner />;
}
