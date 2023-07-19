import { CDN_URL} from "../utils/contants";

const RestaurantCard = (props) => {
    const {resData}=props
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data
    return (
      <div className="res-card" style={{ background: "#f0f0f0" }}>
        <img
          className="res-img"
          alt="rest-none"
          src={CDN_URL +cloudinaryImageId }
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>Rs.{costForTwo/100} for two</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;
  
  