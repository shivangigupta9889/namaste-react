import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo= useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
        
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards && itemCards.map((item) => (
          <li key={item.card.info.id}>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/zyzppy1ee8mfwhyxyoeu"></img>
            {item.card.info.name}-Rs
            {item.card.info.price / 100 || item.card.info.defaultprice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
