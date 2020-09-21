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
    <View>
      <Image
        source={require("../../assets/icon.png")}
        style={{
          width: 50,
          height: 50,
          marginVertical: 16,
        }}
      />

      <View>
        <Text>hi there</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main;
