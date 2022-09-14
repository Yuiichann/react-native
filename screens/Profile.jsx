import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FullWindowOverlay } from "react-native-screens";

const Profile = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C8EFF1", "#2AF5AE"]}
        style={styles.background}
      />

      <View>
        <Text style={{ fontSize: 50, fontWeight: "600", textAlign: "center" }}>
          GROW YOUR BUSSINESS
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, padding: 25, textAlign: "center" }}>
          We have help you to grow your business using online server
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <View style={{ flex: 1 }}>
          <Button title="Login" color="#E3C000" />
        </View>
        <View style={{ flex: 1, marginLeft: 30}}>
          <Button title="Sign up" color="#E3C000" />
        </View>
      </View>

      <View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: 25,
            marginTop: 30,
          }}
        >
          HOW WE WORK?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  box: {
    marginTop: 30,
  },
  buttonGroup: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Profile;
