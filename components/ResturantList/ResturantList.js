import React, { useCallback, useState } from "react";

import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderScrollBar from "./HeaderScrollBar.js";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../constants/routes.js";
import { useQuery } from "@tanstack/react-query";
import { getRestaurentList } from "../../spi/restaurantAPI.js";

export default function ResturantList() {
  const navigation = useNavigation();

  const [search, setSearch] = useState("");
  // const [pets, setPets] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: restaurantlist,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["fetchPets"],
    queryFn: getRestaurentList,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);

    refetch();
  }, []);

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#f9e3be",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <View>
      <TextInput
        placeholder="Search"
        style={{
          width: "95%",
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          backgroundColor: "#fff",
          alignSelf: "center",
        }}
        onChangeText={(value) => setSearch(value)}
      />

      <HeaderScrollBar />
      <ScrollView contentContainerStyle={styles.restaurantSuggestions}>
        {restaurantlist?.map((restaurant) => {
          if (restaurant.name.toLowerCase().includes(search.toLowerCase()))
            return (
              <TouchableOpacity
                key={restaurant._id}
                onPress={() =>
                  navigation.navigate(ROUTES.MENUITEMS, {
                    resturantID: restaurant._id,
                  })
                }
              >
                <View key={restaurant._id} style={styles.restaurantCard}>
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
            );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantSuggestions: {
    flexDirection: "column",
    margin: 5,
  },
  restaurantCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#e0ecff", // A more appealing shade of pink
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    height: 100,
    width: "95%",
    alignSelf: "center",
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
