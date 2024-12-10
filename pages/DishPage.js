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
import { ActivityIndicator, TouchableRipple } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { getDishbyID } from "../api/restaurantAPI";
import { useQuery } from "@tanstack/react-query";

export default function DishPage({ route }) {
  const { resObject, dishObject } = route.params;
  const navigation = useNavigation();

  const { data: dish, isLoading } = useQuery({
    queryKey: ["getOneDish", dishObject._id],
    queryFn: () => getDishbyID(dishObject._id),
  });

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#00000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <View>
      <ScrollView key={dish._id} style={styles.pageContainer}>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Image source={{ uri: dish.image }} style={styles.dishImage} />
        <View style={styles.textContainer}>
          <Text style={styles.dishDescription}>{dish.description}</Text>
        </View>

        <View>
          <TouchableOpacity>
            <View style={styles.cartAddButton}>
              <Text style={styles.cartAddText}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
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
