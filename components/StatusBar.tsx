import React from "react";
import { View, StatusBar } from "react-native";

const StatusBarCom = () => {
  return (
    <View>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={false}
      />
    </View>
  );
};

export default StatusBarCom;
