import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { HomeScreen } from "./src/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstSetWorkout } from "./src/FirstSetWorkout";
import { RootStackParamList } from "./src/RootStackParamList";
import { LegsWorkout } from "./src/LegsWorkout";
import { NextWorkout } from "./src/NextWorkout";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Dream" }}
        />

        <Stack.Screen name="FirstSetWorkout" component={FirstSetWorkout} />
        <Stack.Screen name="LegsWorkout" component={LegsWorkout} />
        <Stack.Screen name="NextWorkout" component={NextWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
