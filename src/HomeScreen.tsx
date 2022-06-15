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

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch(error => alert(error.message));
  };

  return (
    <ImageBackground
      source={{
        uri:
          "https://elleestfit.com/wp-content/uploads/2020/09/freeletics-1024x554.jpg"
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Button
            title="WARM UP edited"
            onPress={() => navigation.navigate("WarmUp", { name: "RJ" })}
          />
          <Button
            title="ARM"
            onPress={() => navigation.navigate("Arm", { name: "PJ" })}
          />
          <Button
            title="BACK"
            onPress={() => navigation.navigate("Back", { name: "FJ" })}
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
          <Button
            title="My workout for today"
            onPress={() =>
              navigation.navigate("NextWorkout", { name: "today" })
            }
          />
        </ScrollView>
        <View style={styles.container2}>
          <Text>Email:{auth.currentUser?.email}</Text>
          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
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
    marginTop: 160
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
    marginTop: 40
  }
});
