import React from "react";
import restaurantlist from "../../data/restaurants.js";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderScrollBar from "./HeaderScrollBar.js";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../constants/routes.js";

export default function ResturantList() {
  const navigation = useNavigation();

  return (
    <View>
      <HeaderScrollBar />
      <ScrollView contentContainerStyle={styles.restaurantSuggestions}>
        {restaurantlist.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            onPress={() =>
              navigation.navigate(ROUTES.MENUITEMS, {
                resturantID: restaurant.id,
              })
            }
          >
            <View key={restaurant.id} style={styles.restaurantCard}>
              <Image
                source={{ uri: restaurant.image }}
                style={styles.restaurantIcon}
              />
              <View>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <Text style={styles.restaurantRate}>
                  Rating: {restaurant.rating}
                </Text>
                <Text>Delivery: {restaurant.deliveryTime}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantSuggestions: {
    flexDirection: "column",
    margin: 10,
  },
  restaurantCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#e0ecff", // A more appealing shade of pink
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    height: 100,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
    marginVertical: 10,
  },
  CategoriesHeader: {
    flex: 1, // Fills the entire screen
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  restaurantRate: {
    fontStyle: "italic",
  },
  restaurantIcon: {
    width: 70,
    height: 70,
    borderRadius: 50, // Half of the width/height
    borderWidth: 4, // Optional: Adds a border
    borderColor: "#d1d1d1", // Optional: Border color
  },
});
