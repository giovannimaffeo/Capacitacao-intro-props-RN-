import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Item({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compra</Text>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9E7E7",
    borderRadius: 14,
    width: 216,
    height: 83,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  },
  itemText: {
    color: "#0041a3",
    fontSize: 19
  }
});
