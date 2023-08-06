import { useEffect, useState } from "react";
import { MENU_URL } from "./contants";
const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
useEffect(() => {
    fetchMenu();
    }, []);
    const fetchMenu = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId="+resId
        );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    };
return resInfo;
}
export default useRestaurantMenu;