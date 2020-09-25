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
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const Orientation = useDeviceOrientation.horizontal ? "row" : "column";

const styles = StyleSheet.create({
  container: {
    flexDirection: Orientation,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default List;

//use flexhorisontal in the contaner view to change the layout
// use alignitems for the container(first view) use alignself for idividual
// alighnitmes is seccondar
//justifycontent is primary axis
// use align content if you are also useing wraping otherwise dont
//setting a negative flex is the same as using flex shrink, wich makes the object shrik to fit
