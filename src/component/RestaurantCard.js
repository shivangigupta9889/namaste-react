import { CDN_URL} from "../utils/contants";

const RestaurantCard = (props) => {
    const {resData}=props
    // console.log(resData)
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData
    return (

      <div className="res-card" style={{ background: "#f0f0f0" }}>
        <img
          className="res-img"
          alt="rest-none"
          src={CDN_URL + cloudinaryImageId }  />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ") }</h4>
        <h4>{avgRating}Stars</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{deliveryTime} minutes</h4> */}
      </div>
    );
  };
  export default RestaurantCard;
  
  