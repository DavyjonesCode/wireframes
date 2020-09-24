import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "../componets/ListItem";
import DATA from "../utils/Data";

import { useDeviceOrientation } from "@react-native-community/hooks";

const List = () => {
  const renderItem = ({ item }) => (
    <ListItem title={item.title} body={item.body} />
  );
  console.log(useDeviceOrientation());
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={useDeviceOrientation.horizontal ? "true"}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default List;
