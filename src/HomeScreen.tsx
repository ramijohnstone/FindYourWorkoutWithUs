import { Button, Text, View, Image } from "react-native";
import { RootStackParamList } from "./RootStackParamList";
import { FunctionComponent } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<
    NavigationProp<RootStackParamList, "FirstSetWorkout">
  >();

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="first set of workouts"
        onPress={() => navigation.navigate("FirstSetWorkout", { name: "RJ" })}
      />
    </View>
  );
};
