import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";

const HomeScreen = () => {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const logoImage = require("../../assets/images/adaptive-icon.png");

  return (
    <Container>
      <View
        style={{
          height: "100%",
        }}
      >
        {/* local image */}
        {/* <Image source={logoImage} style={{ width: 300, height: 300 }} /> */}
        {/* //remote image */}
        {/* <Image
          source={{ uri: "https://picsum.photos/id/1/200/300" }}
          style={{ width: 300, height: 300 }}
        /> */}

        <ImageBackground
          source={logoImage}
          style={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <Text style={{ color: "red" }}>Image Text</Text>
        </ImageBackground>
      </View>
    </Container>
  );
};

export default HomeScreen;
