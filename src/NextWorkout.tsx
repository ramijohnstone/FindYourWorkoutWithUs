import React, { useState, FC } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView,
  Button,
  ImageBackground
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";
import { RouteComponentProps } from "react-router-dom";
import Exercice from "./components/Exercice";
import { auth } from "../firebase";

export const NextWorkout = () => {
  const route = useRoute<RouteProp<RootStackParamList, "NextWorkout">>();

  const [workout, setworkout] = useState();
  const [workoutItems, setWorkoutItems] = useState([]);

  const AddWorkout = () => {
    setWorkoutItems([...workoutItems, workout]);
    setworkout(null);
  };
  const deleteWorkout = index => {
    let itemsCopy = [...workoutItems];
    itemsCopy.splice(index, 1);
    setWorkoutItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "data:image/jpeg;base64,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"
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.workoutHeader}>
          <Text style={styles.userPlace}>
            workout plan for {auth.currentUser?.email}
          </Text>
          <Text style={styles.title}> My workout for today</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.items}>
              {workoutItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => deleteWorkout(index)}
                  >
                    <Exercice text={item}></Exercice>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"your next workout"}
            value={workout}
            onChangeText={text => setworkout(text)}
          />
          <TouchableOpacity onPress={() => AddWorkout()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  workoutHeader: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  userPlace: {
    color: "white"
  },
  title: {
    fontSize: 24,
    fontweight: "bold",
    color: "white"
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "white",
    borderRadius: 60,
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "blue",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1
  },
  addText: {}
});
