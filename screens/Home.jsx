import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 100 }}>
        <Text style={styles.text}>Home Screen</Text>
      </View>

      <Button
        title="Go To Profile"
        color="red"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: "whitesmoke",
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
});

export default Home;
