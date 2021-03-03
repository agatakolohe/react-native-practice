import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CatsContext } from "./CatsContext";

export default class AddCatScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add cats here!</Text>
        {this.context.possibleCats.map((cat, index) => (
          <Button
            key={cat}
            title={`Add ${cat}`}
            onPress={() => this.context.addCat(index)}
          />
        ))}
        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
AddCatScreen.contextType = CatsContext;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
