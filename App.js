import { View } from "react-native";
import restaurantCategories from "./constants/restaurantCategories.js";
import HeaderScrollBar from "./components/HeaderScrollBar.js";
import ResturantList from "./components/ResturantList.js";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuList from "./components/MenuList.js";
import OrderSummary from "./pages/OrderSummary.js";
// import DishPage from "./pages/DishPage.js";
import LoginPage from "./pages/login.js";
import RegisterPage from "./pages/register.js";

export default function App() {
  return (
    <SafeAreaView>
      {/* <HeaderScrollBar />
      // <ResturantList /> */}
      {/* <MenuList /> */}
      {/* <DishPage /> */}
      {/* <LoginPage /> */}
      <RegisterPage />
      {/* <OrderSummary /> */}
    </SafeAreaView>
  );
}
