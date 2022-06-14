import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";
import { RouteComponentProps } from "react-router-dom";

export const FirstSetWorkout = () => {
  const route = useRoute<
    RouteProp<RootStackParamList, "FirstSetWorkoutdddd">
  >();

  return (
    <View>
      <Image
        style={{ width: "100%" }}
        source={require("../assets/images.jpg")}
      />
      <Text>{route.params.name}</Text>
    </View>
  );
};
