import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResturantList from "../../components/ResturantList/ResturantList";
import MenuList from "../../components/MenuList";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ResturantList" component={ResturantList} />
      <Stack.Screen name="MenuList" component={MenuList} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
