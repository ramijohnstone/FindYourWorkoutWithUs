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
import { Arm } from "./src/Arm";
import { Back } from "./src/Back";
import { Leg } from "./src/Leg";
import { Shoulder } from "./src/Shoulder";
import { Abs } from "./src/Abs";
import { RootStackParamList } from "./src/RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Workout" }}
        />
        <Stack.Screen name="WarmUp" component={WarmUP} />
        <Stack.Screen name="Arm" component={Arm} />
        <Stack.Screen name="Back" component={Back} />
        <Stack.Screen name="Leg" component={Leg} />
        <Stack.Screen name="Shoulder" component={Shoulder} />
        <Stack.Screen name="Abs" component={Abs} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
