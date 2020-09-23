import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "../componets/ListItem";
import DATA from "../utils/Data";

const List = () => {
  const renderItem = ({ item }) => (
    <ListItem title={item.title} body={item.body} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
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
