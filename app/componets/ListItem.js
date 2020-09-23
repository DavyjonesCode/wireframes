import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ title, body }) => {
  <View>
    <Text styles={styles.container}>{title}</Text>
    <Text>{body}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ccc",
  },
});
