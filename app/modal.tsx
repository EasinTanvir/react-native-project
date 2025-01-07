import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Pressable,
  Modal,
} from "react-native";

const ModalPage = () => {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const logoImage = require("../assets/images/adaptive-icon.png");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <View>
        <Button title="Modal" onPress={() => setOpen(true)} color="red" />

        <Modal
          visible={open}
          onRequestClose={() => setOpen(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <SafeAreaView>
            <View>
              <Text>Modal Open</Text>
              <Button
                title="Close"
                onPress={() => setOpen(false)}
                color="red"
              />
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default ModalPage;
