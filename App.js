import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Cafe from "./Cat";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.text}>yaasssss??</Text>
          <Cafe />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: "darkcyan",
    color: "green",
    // color: "red",
    fontWeight: "bold",
    fontSize: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
});

// import React from 'react';
// import { Text, TextInput, View } from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//       <Text>I am also a cat!</Text>
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat />
//       <Cat />
//       <Cat />
//     </View>
//   );
// }

// export default Cafe;
