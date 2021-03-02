import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Cafe from "./Cat";
import Header from "./Header";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View>
          <Pressable
            onPress={() => {
              setTimesPressed((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
              },
              styles.wrapperCustom,
            ]}
          >
            {({ pressed }) => (
              <Text style={styles.text}>
                {pressed ? "Pressed!" : "Press Me"}
              </Text>
            )}
          </Pressable>
          <View style={styles.logBox}>
            <Text testID="pressable_press_console">{textLog}</Text>

            {/* <Text style={styles.text}>yaasssss??</Text> */}
          </View>
          <Cafe />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
};
const MyTheme = {
  ...DarkTheme,
  // colors: {
  //   ...DefaultTheme.colors,
  //   dark: true,
  //   primary: "rgb(255, 45, 85)",
  // },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: "10%",
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
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});
export default App;
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

// import React, { useState } from "react";
// import { Pressable, StyleSheet, Text, View } from "react-native";

// const App = () => {
//   const [timesPressed, setTimesPressed] = useState(0);

//   return <View style={styles.container}></View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 16,
//   },
//   wrapperCustom: {
//     borderRadius: 8,
//     padding: 6,
//   },
//   logBox: {
//     padding: 20,
//     margin: 10,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: "#f0f0f0",
//     backgroundColor: "#f9f9f9",
//   },
// });
