import { ImageBackground, Text } from "react-native";

export const Background = () => {
  return (
    <ImageBackground
      source={{ uri: "https://i.ytimg.com/vi/OT8if6DXOFQ/maxresdefault.jpg" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Text>main page</Text>
    </ImageBackground>
  );
};
