import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import restaurantCategories from "../constants/restaurantCategories.js";

export default function HeaderScrollBar() {
  return (
    <ScrollView horizontal={true}>
      {restaurantCategories.map((cuisine) => (
        <View key={cuisine.id} style={styles.cuisineCard}>
          <Image
            source={{ uri: cuisine.categoryImage }}
            style={styles.cuisineFlag}
          />
          <Text>{cuisine.categoryName}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // actual cards of the restaurant cuisines
  cuisineCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#ccdfff",
    margin: 5,
    padding: 5,
    justifyContent: "center",
    width: 100,
    borderRadius: 10,
  },

  // Image for restaurant's cuisine origin
  cuisineFlag: {
    width: 20,
    height: 20,
  },
});
