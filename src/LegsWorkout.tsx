import React, { useState, FC } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";
import { RouteComponentProps } from "react-router-dom";

export const LegsWorkout = () => {
  const route = useRoute<
    RouteProp<RootStackParamList, "FirstSetWorkoutdddd">
  >();

  return (
    <View>
      <Text>{route.params.name} and weeksHHH</Text>
    </View>
  );
};
