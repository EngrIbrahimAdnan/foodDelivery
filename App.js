import { View } from "react-native";
// import restaurantCategories from "./constants/restaurantCategories.js";
// import HeaderScrollBar from "./components/ResturantList/HeaderScrollBar.js";
import ResturantList from "./components/ResturantList/ResturantList.js";
// import MenuList from "./components/MenuList.js";
// import OrderSummary from "./pages/OrderSummary.js";
// import DishPage from "./pages/DishPage.js";
import LoginPage from "./pages/Auth/login.js";
import RegisterPage from "./pages/Auth/register.js";

import AuthNavigation from "./naviagtions/AuthNav/AuthNavigation.js";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./naviagtions/HomeNav/HomeNavigation.js";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      {/* <OrderSummary /> */}

      <QueryClientProvider client={queryClient}>
        <HomeNavigation />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
