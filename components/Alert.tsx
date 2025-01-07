import React from "react";
import { Alert, Button, View } from "react-native";

const AlertCom = () => {
  return (
    <View>
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Invalid Data", "wrong", [
            { text: "Cancel", onPress: () => console.log("cancel presed") },
            { text: "Ok", onPress: () => console.log("Ok presed") },
          ])
        }
      />
    </View>
  );
};

export default AlertCom;
