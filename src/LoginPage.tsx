import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground
} from "react-native";
import { auth } from "../firebase";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<
    NavigationProp<RootStackParamList, "Home">
  >();

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user: any) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return () => unsubscribed();
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log("Registered in with:", user.email);
      })
      .catch((error: { message: any }) => alert(error.message));
  };
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log("logged in with:", user.email);
      })
      .catch((error: { message: any }) => alert(error.message));
  };

  return (
    <ImageBackground
      source={{
        uri:
          "https://elleestfit.com/wp-content/uploads/2020/09/freeletics-1024x554.jpg"
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Image style={styles.image} source={require("../assets/Logo.jpg")} />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -120
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16
  },
  button: {
    backgroundColor: "#D61414",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#9C1010 ",
    borderWidth: 2
  },
  buttonOutlineText: {
    color: "#D61414",
    fontWeight: "700",
    fontSize: 16
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover"
  }
});
