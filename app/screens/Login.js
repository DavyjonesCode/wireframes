import React, { useState } from "react";
import {
  Image,
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";

const Login = () => {
  const [modalVisable, setModalVisable] = useState(false);
  const handleToggle = () => setModalVisable(!modalVisable);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 100, height: 100 }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Sign in with apple
        </Text>
      </TouchableOpacity>
      <Button title="sign in with email" onPress={handleToggle} />
      <Modal transparent={true} visible={modalVisable}>
        <View style={styles.modal}>
          <Text>This is a modal</Text>
          <Button title="Close" onPress={handleToggle} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 2,
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
    marginVertical: 20,
  },
  modal: {
    height: 200,
    width: "80%",
    margin: "10%",
    alignItems: "center",
    justifyContent: "center",
    padding: 35,
    borderRadius: 15,
    backgroundColor: "#f00",
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: "grey",
    width: 150,
  },
});
export default Login;
