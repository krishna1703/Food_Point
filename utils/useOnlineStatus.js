

import { useState,useEffect } from "react";

const useOnlineStatus = () =>{
 
     const [OnlineStatus , setOnlinestatus] = useState(true)
    

      useEffect(()=>{
        OnlineStatusFunction ();
      },[])

       const  OnlineStatusFunction = () =>{
         
         window.addEventListener("offline" , ()=>{
            setOnlinestatus(false);
         })

         
         window.addEventListener("online" , ()=>{
            setOnlinestatus(true);


         })
       }

       return OnlineStatus
}

export default useOnlineStatus;