import {
  Button,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { RootStackParamList } from "./RootStackParamList";
import { FunctionComponent } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { auth } from "../firebase";

export const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<
    NavigationProp<RootStackParamList, "Home">
  >();

  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.navigate("Login");
  //     })
  //     .catch(error => alert(error.message));
  // };

  return (
    <ImageBackground
      source={{
        uri:
          "https://elleestfit.com/wp-content/uploads/2020/09/freeletics-1024x554.jpg"
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Text style={styles.title}>Welcome: {auth.currentUser?.email}</Text>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Button
            title="WARMUPS "
            onPress={() => navigation.navigate("WarmUp", { name: "RJ" })}
          />

          <Button
            title="ARM"
            onPress={() => navigation.navigate("Arm", { name: "FJ" })}
          />
          <Button
            title="LEG"
            onPress={() => navigation.navigate("Leg", { name: "TJ" })}
          />
          <Button
            title="SHOULDER"
            onPress={() => navigation.navigate("Shoulder", { name: "GJ" })}
          />
          <Button
            title="ABS"
            onPress={() => navigation.navigate("Abs", { name: "WJ" })}
          />
        </ScrollView>

        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Salle", { name: "PJ" })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Find my Find</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("NextWorkout")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>MY WORKOUT FOR TODAY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={handleSignOut}
            onPress={() => navigation.navigate("Login", { name: "today" })}
            style={(styles.button, styles.color)}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 100
  },
  container: {
    flex: 1
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  },
  title: {
    marginTop: 70,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#0782F9",
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  color: {
    backgroundColor: "#D61414",

    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  }
});
