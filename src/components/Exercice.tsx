import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { string } from "prop-types";

const Exercice: React.FC = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>

        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
  },
  itemText: {
    maxWidth: "80%"
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borerWidth: 2,
    borderRadius: 5
  }
});

export default Exercice;
