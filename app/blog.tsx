import Box from "@/components/Box";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const BlogPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Box style={{ backgroundColor: "yellow" }}>First Box</Box>
        <Box style={{ backgroundColor: "gray" }}>Red Box</Box>
        <Box style={{ backgroundColor: "green" }}>Green Box</Box>
        <Box style={{ backgroundColor: "green" }}>Green Box</Box>
      </View>
    </ScrollView>
  );
};

export default BlogPage;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
  },
});
