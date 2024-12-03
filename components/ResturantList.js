import React from "react";
import restaurantlist from "../constants/restaurants.js";

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ResturantList() {
  return (
    <ScrollView contentContainerStyle={styles.restaurantSuggestions}>
      {restaurantlist.map((restaurant) => (
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
      ))}
    </ScrollView>
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
