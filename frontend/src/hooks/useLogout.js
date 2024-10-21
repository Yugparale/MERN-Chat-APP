import { useState } from "react"
import { useAuthContext } from "../assets/context/contex";
import toast from "react-hot-toast";
const useLogout = () => {

    const [loading, setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();
    const logout = async() =>{
        setLoading(true);
        try {
          const res=await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"Content-Type" : "applicaton/json"}
          })  

          const data=await res.json();
          localStorage.removeItem("chat-user") 
          setAuthUser(null);
        } catch (error) {
           toast.error(error.mesage); 
        }finally{
            setLoading(false)
        }
       
    };
    return {loading,logout}

}


export default useLogout
