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
        <View>
          <ScrollView style={styles.scrollView1}>
            <Text style={styles.title}>
              The title and onPress handler are required. It is recommended to
              set accessibilityLabel to help make your app usable by everyone.
            </Text>
            <Button
              title="Press me"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.title}>
            Adjust the color in a way that looks standard on each platform. On
            iOS, the color prop controls the color of the text. On Android, the
            color adjusts the background color of the button.
          </Text>
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          />
        </View>

        <View>
          <Text style={styles.title}>
            All interaction for the component are disabled.
          </Text>
          <Button
            title="Press me"
            disabled
            onPress={() => Alert.alert("Cannot press this one")}
          />
        </View>

        <View>
          <Text style={styles.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
          <View style={styles.fixToText}>
            <Button
              title="Left button"
              onPress={() => Alert.alert("Left button pressed")}
            />
            <Button
              title="Right button"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  scrollView: {
    flex: 1
  },
  scrollView1: {
    paddingTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 100
  }
});
