import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Location(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Location.png")}
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
    height: 762,
    alignSelf: "center"
  }
});

export default Location;
