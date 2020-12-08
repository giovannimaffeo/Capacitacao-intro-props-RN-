import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";

import Header from "./src/Components/Header";
import Item from "./src/Components/Item";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#f3833f"} />
      <Header title="Lista de Compras" />
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <Item name="Iogurte" />
        <Item name="Maçã" />
        <Item name="Leite" />
        <Item name="Sorvete" />
        <Item name="Feijão" />
        <Item name="Arroz" />
        <Item name="Carne" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});
