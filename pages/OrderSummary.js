import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function OrderSummary() {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.OrderHeader}>OrderSummary</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1, // Ensure the parent container takes the full screen space
    alignItems: "center",
  },
  OrderHeader: {
    fontSize: 20,
    height: 40,
  },
});
