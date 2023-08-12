import { LOGO_URL } from "../utils/contants";
import { useState ,useContext} from "react";
import {  Link  } from "react-router-dom";
import useOnelineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

    
const Header = () => {
const[btnName,setbtnName]=useState("login");
const onlineStatus = useOnelineStatus();
const {loggedInUser}=useContext(UserContext);


const cartitems=useSelector((store)=>store.cart.items)
// console.log(loggedInUser)
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg ">
        <div className="logo-container">
          <img
            className="w-40 "
            alt="error"
            src = {LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">OnlineStatus:{onlineStatus?"✅":"🧧"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contactUs">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/cart">Cart ({cartitems.length} items)</Link></li>
            <button className="login" onClick={()=>{
              btnName=="login"?
              setbtnName("logout"):
              setbtnName("login")
            }}>{btnName}
              </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;