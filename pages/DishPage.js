import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import restaurants from "../constants/restaurants";

export default function DishPage() {
  const restaurantIndex = 3;
  const DishIndex = 1;

  const dish = restaurants[restaurantIndex].menuItems[DishIndex];

  return (
    <View>
      <Text style={styles.OrderHeader}>Back</Text>

      <ScrollView style={styles.pageContainer}>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Image source={{ uri: dish.image }} style={styles.dishImage} />
        <View style={styles.textContainer}>
          <Text style={styles.dishDescription}>{dish.description}</Text>
        </View>

        <View>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
              "rgba(255, 255, 255, 0.1)",
              false
            )}
          >
            <View style={styles.cartAddButton}>
              <Text style={styles.cartAddText}>Add to Cart</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderHeader: {
    fontSize: 20,
    padding: 10,
  },
  cartAddButton: {
    backgroundColor: "#777cff",
    width: "100%", // Set button width
    height: 50, // Set button height
    borderRadius: 10, // Rounded corners
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  cartAddText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  dishImage: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  textContainer: {
    padding: 20,
  },
  dishName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  dishDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    textAlign: "justify",
  },
});
