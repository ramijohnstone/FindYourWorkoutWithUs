import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  SafeAreaView,
  ScrollView
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";
import * as ImagePicker from "expo-image-picker";

export const Leg = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Leg">>();

  const [pickedImagePath, setPickedImagePath] = useState("");

  const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.buttonContainer}>
          <Button
            title="Information"
            onPress={() =>
              Alert.alert("Exercice Jambes\n mouvement lent et précis\n")
            }
          />
        </View>

        <View style={styles.screen}>
          <Text style={styles.title}>Le squat</Text>
          <Image
            style={styles.image}
            source={require("../assets/Leg/Capture.jpg")}
          />
          <Text style={styles.title}>Le soulevé de terre</Text>
          <Image
            style={styles.image}
            source={require("../assets/Leg/Capture1.jpg")}
          />
          <Text style={styles.title}>Le leg extension</Text>
          <Image
            style={styles.image}
            source={require("../assets/Leg/Capture2.jpg")}
          />
          <Text style={styles.title}>La Presse</Text>
          <Image
            style={styles.image}
            source={require("../assets/Leg/Capture3.jpg")}
          />
        </View>
        <Text style={styles.title}>Ajoute un Exercice</Text>
        <View style={styles.screen}>
          <View style={styles.buttonContainer}>
            <Button onPress={showImagePicker} title="Select an image" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={openCamera} title="Open camera" />
          </View>

          <View style={styles.imageContainer}>
            {pickedImagePath !== "" && (
              <Image source={{ uri: pickedImagePath }} style={styles.image} />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  scrollView: {
    flex: 0.5
  },

  title: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },

  title2: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 6,
    backgroundColor: "black",
    color: "yellow",
    textAlign: "center",
    fontSize: 7,
    fontWeight: "bold"
  },

  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: 300,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 6
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover"
  }
});
