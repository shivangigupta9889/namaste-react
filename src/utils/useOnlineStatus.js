import { useEffect, useState } from "react";


const useOnelineStatus=()=>{
const[onelineStatus,setOnlineStatus]= useState(true)

    useEffect(()=>{
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
          
        });

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
          });
    },[])
    return onelineStatus;
}

export default useOnelineStatus;