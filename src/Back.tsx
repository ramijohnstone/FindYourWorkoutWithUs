import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";

export const Back = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Back">>();

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
