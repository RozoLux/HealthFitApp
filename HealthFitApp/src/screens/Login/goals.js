import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Goals(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Goal1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    width: 369,
    height: 737,
    alignSelf: "center"
  }
});

export default Goals;
