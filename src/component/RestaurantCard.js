import { useContext } from "react";
import { CDN_URL} from "../utils/contants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData}=props
    // console.log(resData)
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData
    const {loggedInUser}=useContext(UserContext)
    return (

      <div className="m-4 p-4 w-[250px] rounded-lg  bg-gray-100 hover:bg-gray-200 " >
        <img
          className="rounded-lg"
          alt="rest-none"
          src={CDN_URL + cloudinaryImageId }  />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines }</h4>
        <h4>{avgRating}Stars</h4>
        <h4>{costForTwo}</h4>
        <h4 className="font-serif">user:{loggedInUser}</h4>
        {/* <h4>{deliveryTime} minutes</h4> */}
      </div>
    );
  };

export const withOfferLabel=(RestaurantCard)=>{

  return (props)=>{
    return (
      <div>
         <label className="abslute m-2 p-2 bg-black text-white rounded-lg">Offer</label>
         <RestaurantCard    {...props}/>
      </div>
     
    )
  }
}
export default RestaurantCard;
  
  