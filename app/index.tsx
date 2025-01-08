import React from "react";
import { Link } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StatusBarCom from "@/components/StatusBar";
import Activity from "@/components/Activity";
import AlertCom from "@/components/Alert";
import CustomBtn from "@/components/custom/CustomBtn";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.linkContainer}>
          <Link href="/modal">
            <Text style={styles.linkText}>Modal</Text>
          </Link>
        </View>
        <View style={styles.linkContainer}>
          <Link href="/blog">
            <Text style={styles.linkText}>Blog Page</Text>
          </Link>
        </View>

        <StatusBarCom />
        <Activity visible={false} />
        <CustomBtn onPress={() => {}} title="Add" />

        <AlertCom />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "red",
  },
  container: {
    height: "100%",
    padding: 10,
    backgroundColor: "red",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  linkText: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
});
