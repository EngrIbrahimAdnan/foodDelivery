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
import restaurants from "../data/restaurants";

import { useNavigation } from "@react-navigation/native";

export default function DishPage({ route }) {
  const { dishID, resturantID } = route.params;

  const navigation = useNavigation();
  
  return (
    <View>
      {restaurants.map((menu) => {
        if (menu.id === resturantID) {
          return menu.menuItems.map((dish) => {
            if (dish.id === dishID) {
              return (
                <ScrollView key={dish.id} style={styles.pageContainer}>
                  <Text style={styles.dishName}>{dish.name}</Text>
                  <Image
                    source={{ uri: dish.image }}
                    style={styles.dishImage}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.dishDescription}>
                      {dish.description}
                    </Text>
                  </View>

                  <View>
                    <TouchableOpacity>
                      <View style={styles.cartAddButton}>
                        <Text style={styles.cartAddText}>Add to Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              );
            }
          });
        }
      })}
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
