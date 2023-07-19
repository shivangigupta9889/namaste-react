import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

  const Body = () => {
    return (
      <div className="body">
        <div className="Search">
          <h3>Search</h3>
        </div>
        <div className="restro-container">
          {resList.map((restaurant)=> (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>
         ) )}
        </div>
      </div>
    );
  };
  export default Body;
  