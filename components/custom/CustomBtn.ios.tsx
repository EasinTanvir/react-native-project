import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomBtn = ({ onPress, title }: { onPress: any; title: any }) => {
  return (
    <Pressable
      style={{ backgroundColor: "black", padding: 4 }}
      onPress={onPress}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
