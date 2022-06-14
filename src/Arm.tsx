import React, { useState, FC } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";

export const Arm: FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Arm">>();

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
