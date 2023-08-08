import { CDN_URL} from "../utils/contants";

const RestaurantCard = (props) => {
    const {resData}=props
    // console.log(resData)
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData
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
        {/* <h4>{deliveryTime} minutes</h4> */}
      </div>
    );
  };

export const withOfferLabel=(RestaurantCard)=>{

  return ()=>{
    return (
      <h1>"open"</h1>
    )
  }
}
export default RestaurantCard;
  
  