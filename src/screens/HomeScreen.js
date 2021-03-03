import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CatsContext } from "./CatsContext";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have {this.context.currentCats.length} cats</Text>

        <Button
          title="Add some cats"
          onPress={() => this.props.navigation.navigate("Cats")}
        />
      </View>
    );
  }
}
HomeScreen.contextType = CatsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkcyan",
    alignItems: "center",
    justifyContent: "center",
  },
});
