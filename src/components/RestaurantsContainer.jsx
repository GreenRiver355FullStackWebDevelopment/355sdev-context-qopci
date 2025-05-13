import Restaurant from "./Restaurant";
import { useRestaurants } from "../context/RestaurantContext";

function RestaurantsContainer() {
  // Accessing restaurant data from context using the hook
  const { restaurants } = useRestaurants();
  
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
