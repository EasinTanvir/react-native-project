import React from "react";
import { ActivityIndicator, View } from "react-native";

const Activity = ({
  size = "small",
  visible,
}: {
  size?: any;
  visible: boolean;
}) => {
  return (
    <View>
      <ActivityIndicator size={size} color="blue" animating={visible} />
    </View>
  );
};

export default Activity;
