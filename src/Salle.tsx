import React, { useState, FC } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";
import { Picker } from "@react-native-picker/picker";

export const Salle = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Arm">>();
  const [Salle, setSalle] = useState("Unknown");
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Salle à Lyon</Text>
      <Picker
        selectedValue={Salle}
        onValueChange={(value, index) => setSalle(value)}
        style={styles.picker}
      >
        <Picker.Item label="Choisi une lieu" value="" />
        <Picker.Item
          label="Wellness Sport Lyon 2 "
          value=" (Adresse) : 134 Cr Charlemagne, 69002 Lyon.
                  (Horaires) :  Ouvre à 07:00.
                  (Téléphone) : 04 78 71 79 19 "
        />
        <Picker.Item
          label="Wellness Sport Lyon 3"
          value=" (Adresse) : 153 Rue Vendôme, 69003 Lyon
                  (Horaires) :  Ouvre à 07:00
                  (Téléphone) : 04 78 71 02 21"
        />
        <Picker.Item
          label="Keepcool Lyon 2"
          value=" (Adresse) : 35 Rue Denuzière, 69002 Lyon
                  (Horaires) :  Ouvre à 06:00
                  (Téléphone) :  04 74 72 49 54"
        />
        <Picker.Item
          label="Interval"
          value=" (Adresse) : 47 Cr Gambetta, 69003 Lyon
                  (Horaires) :  Ouvre à 06:00 
                  (Téléphone) :  04 78 82 16 69"
        />
        <Picker.Item
          label="L'Appart Fitness"
          value=" (Adresse) : 133 Gd Rue de la Guillotière, 69007 Lyon
                  (Horaires) :  Ouvre à 06:00 
                  (Téléphone) :  04 82 91 09 91"
        />
      </Picker>
      <Text style={styles.text}>[Information]</Text>
      <Text>{Salle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  text: {
    fontSize: 24,
    color: "#61dafb"
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 3,
    borderColor: "#61dafb"
  }
});
