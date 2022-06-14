import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";

export const Leg = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Leg">>();

  return (
    <View>
      <Image
        style={{ width: "10%" }}
        source={require("../assets/images.jpg")}
      />
      <Text>{route.params.name}</Text>
    </View>
  );
};
