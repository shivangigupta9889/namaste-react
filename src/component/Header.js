import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import {  Link  } from "react-router-dom";
import useOnelineStatus from "../utils/useOnlineStatus";
    
const Header = () => {
const[btnName,setbtnName]=useState("login");
const onlineStatus = useOnelineStatus();
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            alt="error"
            src = {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>OnlineStatus:{onlineStatus?"✅":"🧧"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contactUs">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnName=="login"?
              setbtnName("logout"):
              setbtnName("login")
            }}>{btnName}
              </button>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;