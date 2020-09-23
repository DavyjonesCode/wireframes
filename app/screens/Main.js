import React from "react";
import {
  Image,
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card } from "../componets/Card";
import Box from "../componets/Box";

const Main = () => {
  return (
    <View style={{ backgroundColor: "green", flex: 1 }}>
      <View style={styles.viewOne}>
        <Image
          source={require("../../assets/icon.png")}
          style={{
            width: 50,
            height: 50,
            marginVertical: 25,
          }}
        />
        <View>
          <Image
            source={require("../../assets/icon.png")}
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  viewOne: {
    backgroundColor: "blue",
    height: 100,
  },
});

export default Main;
