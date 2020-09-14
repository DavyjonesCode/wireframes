import React from "react";
import {StyleSheet, View} from "react-native"

export default ({children, color}) =>  {
  return(
    <View style={styles.container}>
        {children, }
    </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f00",
    alignItems: 'center',
    justifyContent: 'center'
  },
});