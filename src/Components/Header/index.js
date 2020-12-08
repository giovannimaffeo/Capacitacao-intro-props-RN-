import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ title, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f3833f",
    justifyContent: "center"
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10
  }
});
