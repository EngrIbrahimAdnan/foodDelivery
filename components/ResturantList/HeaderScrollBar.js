import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import restaurantCategories from "../../data/restaurantCategories.js";

export default function HeaderScrollBar() {
  return (
    <ScrollView horizontal={true} style={styles.bar}>
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
  bar: {
    width: "95%",
    alignSelf: "center",
  },

  // actual cards of the restaurant cuisines
  cuisineCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#ccdfff",
    marginRight: 10,

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
