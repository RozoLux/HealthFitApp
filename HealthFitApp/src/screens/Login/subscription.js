import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Subscription(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <Image
          source={require("../../assets/images/Subscription.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: 375,
    height: 749
  },
  rect: {
    width: 100,
    height: 100,
    backgroundColor: "#E6E6E6",
    marginLeft: 305,
    marginTop: 204
  },
  imageRow: {
    height: 749,
    flexDirection: "row",
    flex: 1,
    marginRight: -405,
    marginTop: 33
  }
});

export default Subscription;
