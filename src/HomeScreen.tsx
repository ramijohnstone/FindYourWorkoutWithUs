import {
  Button,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import { RootStackParamList } from "./RootStackParamList";
import { FunctionComponent } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<
    NavigationProp<RootStackParamList, "FirstSetWorkout">
  >();

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
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  container: {
    flex: 1
  }
});
