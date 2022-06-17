import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Alert
} from "react-native";
import * as React from "react";
import { HomeScreen } from "./src/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WarmUP } from "./src/WarmUp";
import { Salle } from "./src/Salle";
import { Arm } from "./src/Arm";
import { Leg } from "./src/Leg";
import { Shoulder } from "./src/Shoulder";
import { Abs } from "./src/Abs";
// import { Options } from "./src/Options";
import { RootStackParamList } from "./src/RootStackParamList";
import { NextWorkout } from "./src/NextWorkout";
import LoginPage from "./src/LoginPage";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="WarmUp" component={WarmUP} />
        <Stack.Screen name="Salle" component={Salle} />
        <Stack.Screen name="Arm" component={Arm} />
        <Stack.Screen name="Leg" component={Leg} />
        <Stack.Screen name="Shoulder" component={Shoulder} />
        <Stack.Screen name="Abs" component={Abs} />
        <Stack.Screen name="NextWorkout" component={NextWorkout} />
        {/* <Stack.Screen name="Options" component={Options} /> */}
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
