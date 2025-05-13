import { createContext, useContext } from "react";

// Creating the context for sharing restaurant data across components
export const RestaurantContext = createContext();

// Hook to consume restaurant context data
export const useRestaurants = () => useContext(RestaurantContext);
