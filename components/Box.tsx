import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

type Props = {
  children: React.ReactNode;
  style: any;
};

const Box = ({ children, style }: Props) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View
      style={[
        styles.box,
        style,
        {
          width: windowWidth > 500 ? "60%" : "90%",
          height: windowHeight > 500 ? "60%" : "90%",
        },
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    ...Platform.select({
      ios: {
        padding: 10,
      },
      android: {
        padding: 15,
      },
    }),

    backgroundColor: "black",
  },
  text: {
    color: "red",
  },
});
