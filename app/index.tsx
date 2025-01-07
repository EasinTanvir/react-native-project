import React from "react";
import { Link } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Link href="/modal">
          <Text style={styles.linkText}>Modals</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
  },
  linkText: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
});
