import React, { Component } from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";

export default class AboutScreen extends Component {
  static navigationOptions = {
    drawerLabel: "About",
    drawerIcon: ({ tintColor }) => {
      <Image
        source={require("../img/aboutImg.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />;
    },
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>About Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    heigh: 24,
  },
});
