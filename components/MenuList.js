import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import menuList from "../data/restaurants.js";

import { useNavigation } from "@react-navigation/native";

export default function MenuList({ route }) {
  const { resturantID } = route.params;

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.menuStyle}>
      {menuList.map((menu) => {
        if (menu.id === resturantID) {
          return (
            <View>
              <View style={styles.restaurantNameContainer}>
                <Text style={styles.restaurantName}>{menu.name}</Text>
              </View>
              {menu.menuItems.map((dish) => (
                <View>
                  <View style={styles.dishCard}>
                    <Image
                      source={{ uri: dish.image }}
                      style={styles.dishImg}
                    />
                    <View>
                      <Text style={styles.dishName}>{dish.name}</Text>
                      <Text style={styles.dishPrice}>Price: ${dish.price}</Text>
                      <Text style={styles.dishDes}>{dish.description}</Text>

                      <View>
                        {Platform.OS === "android" ? (
                          <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple(
                              "rgba(255, 255, 255, 0.1)",
                              false
                            )}
                          >
                            <View style={styles.cartAddButton}>
                              <Text style={styles.cartAddText}>
                                Add to Cart
                              </Text>
                            </View>
                          </TouchableNativeFeedback>
                        ) : (
                          <TouchableOpacity style={styles.cartAddButton}>
                            <Text style={styles.cartAddText}>Add to Cart</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          );
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  restaurantNameContainer: {
    flex: 1, // Ensure the parent container takes the full screen space
    alignItems: "center",
  },
  restaurantName: {
    fontSize: 20,
    height: 30,
  },

  cartAddButton: {
    backgroundColor: "#777cff",
    width: 200, // Set button width
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
  dishImg: {
    width: 70,
    height: 70,
    borderRadius: 50, // Half of the width/height
    borderWidth: 4, // Optional: Adds a border
    borderColor: "#d1d1d1", // Optional: Border color
  },
  dishCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#e0ecff", // A more appealing shade of pink
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
    marginVertical: 10,
  },

  dishName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  dishPrice: {
    color: "gray",
  },

  dishDes: {
    fontStyle: "italic",
    flexWrap: "wrap",
    paddingRight: 67,
    margin: 10,
  },

  menuStyle: {
    flexDirection: "column",
    margin: 10,
  },
});
