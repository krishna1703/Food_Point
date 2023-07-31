
import { useState, useEffect } from "react";



const useResMenu = (resId) => {

    const [resinfo, setresinfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const Data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId)

        const Json = await Data.json();

       



        setresinfo(Json.data);
    };



  
    return resinfo;
}

export default useResMenu;