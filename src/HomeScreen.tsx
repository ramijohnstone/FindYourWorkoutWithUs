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
        title="arms biceps and tri"
        onPress={() => navigation.navigate("FirstSetWorkout", { name: "arms" })}
      />
      <Button
        title="legs both legs"
        onPress={() =>
          navigation.navigate("LegsWorkout", { name: "legs FOR DAYS" })
        }
      />
      <Button
        title="My workout for today"
        onPress={() => navigation.navigate("NextWorkout", { name: "today" })}
      />
    </View>
  );
};
