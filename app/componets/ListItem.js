import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ title, body }) => {
  return (
    <View>
      <Text style={styles.container}>{title}</Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    padding: 1,
    marginVertical: 5,
    backgroundColor: "#ccc",
  },
  bodyText: {
    paddingHorizontal: 10,
    borderWidth: 5,
    borderColor: "black",
  },
});
