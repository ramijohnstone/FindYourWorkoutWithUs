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

export const WarmUP = () => {
  const route = useRoute<RouteProp<RootStackParamList, "WarmUP">>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button
          title="Information"
          onPress={() =>
            Alert.alert("Don't rush\nthese warmup No equipment\n 5-8 min")
          }
        />
        <Text style={styles.title}>50x Skipping Jumps</Text>
        <Image
          style={styles.image}
          source={require("../assets/warmup/IMG_0728.jpg")}
        />
        <Text style={styles.title}>50x Jumping Jacks</Text>
        <Image
          style={styles.image}
          source={require("../assets/warmup/IMG_0729.jpg")}
        />
        <Text style={styles.title}>20x Crunches</Text>
        <Image
          style={styles.image}
          source={require("../assets/warmup/IMG_0730.jpg")}
        />
        <Text style={styles.title}>10x Plank Knees to Elbows</Text>
        <Image
          style={styles.image}
          source={require("../assets/warmup/IMG_0731.jpg")}
        />
        <Text style={styles.title}>5x Warmup Roll</Text>
        <Image
          style={styles.image}
          source={require("../assets/warmup/IMG_0732.jpg")}
        />
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
  image: {
    width: "100%"
  }
});
