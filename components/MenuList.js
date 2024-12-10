import React, { useCallback, useEffect, useState } from "react";
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

import { useNavigation } from "@react-navigation/native";
import ROUTES from "../constants/routes.js";
import { ActivityIndicator, TouchableRipple } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import { getRestaurentbyID } from "../api/restaurantAPI.js";

export default function MenuList({ route }) {
  const { object } = route.params;

  // const [refreshing, setRefreshing] = useState(false);

  const { data: restaurant, isLoading } = useQuery({
    queryKey: ["getOneRestaurant", object._id],
    queryFn: () => {
      console.log("QUERYING");
      return getRestaurentbyID(object._id);
    },
    onSuccess: () => {
      console.log("hahahaha");
    },
    onError: (error) => {
      console.log("NOPE");
      console.log(error);
    },
  });

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);

  //   refetch();
  // }, []);

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

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.menuStyle}>
      {/* <Text>This is name: {restaurant?.name}</Text>
      <Text>This is ID: {restaurant?._id}</Text>
      <Text>This is first item: {restaurant?.items[0].name}</Text> */}

      <View style={styles.restaurantNameContainer}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
      </View>
      {restaurant.items.map((menu) => (
        <TouchableRipple
          key={menu._id}
          onPress={() =>
            navigation.navigate(ROUTES.DISHINFO, {
              resObject: restaurant,
              dishObject: menu,
            })
          }
          style={styles.restaurantCardContainer}
          rippleColor="rgba(255, 255, 255, 0.5)"
        >
          <View style={styles.restaurantCard}>
            <Image source={{ uri: menu.image }} style={styles.dishImg} />
            <View>
              <Text style={styles.dishName}>{menu.name}</Text>
              <Text style={styles.dishPrice}>Price: ${menu.price}</Text>
              <Text style={styles.dishDes}>{menu.description}</Text>
              <View>
                <TouchableOpacity style={styles.cartAddButton}>
                  <Text style={styles.cartAddText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableRipple>
      ))}
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
    width: "50%", // Set button width
    borderRadius: 10, // Rounded corners
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 2,
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

  restaurantCardContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#e0ecff", // A more appealing shade of pink
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    width: "95%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 8,
    elevation: 5, // Shadow for Android
    marginVertical: 10,
  },

  restaurantCard: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    height: 100,
    width: "95%",
    alignSelf: "center",
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
