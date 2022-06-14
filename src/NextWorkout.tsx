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
  Button
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";
import { RouteComponentProps } from "react-router-dom";
import Exercice from "./components/Exercice";

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
      <View style={styles.workoutHeader}>
        <Text style={styles.title}> My workout for today</Text>

        <View style={styles.items}>
          {/* <ScrollView style={styles.scrollview}> */}
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
          {/* </ScrollView> */}
          {/* <Exercice text={"i will do 10 push ups"} />
          <Exercice text={"i will do 10 pull ups"} /> */}
        </View>
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
  title: {
    fontSize: 24,
    fontweight: "bold"
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
