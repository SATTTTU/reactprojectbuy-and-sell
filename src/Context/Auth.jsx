import axios from "axios";
import { createContext,  useEffect,useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => { // Accept 'children' as a prop
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });
    axios.defaults.headers.common['Authorization']=auth?.token
    useEffect(()=>{
        const data=localStorage.getItem('auth')
        if(data){
            const parseData=JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.user
         } )
        }
    },[])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children} {/* Render the children */}
        </AuthContext.Provider>
    );
};

// Custom hook
const useAuth = () => useContext(AuthContext); // Pass AuthContext to useContext

export { useAuth, AuthProvider };
