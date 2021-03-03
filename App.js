import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Start Code Here
import HomeScreen from "./src/components/Homescreen";
import AboutScreen from "./src/components/AboutScreen";
import ContactScreen from "./src/components/ContactScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Conact" component={ContactScreen} />
    </Drawer.Navigator>
  );
}
// const AppNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     About: {
//       screen: AboutScreen,
//     },
//     Contact: {
//       screen: ContactScreen,
//     },
//   },
//   {
//     initialRouteName: "Home",
//     contentOptions: {
//       activeTintColor: "#e91e63",
//     },
//   }
// );

const AppContainer = createAppContainer(MyDrawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// Original Code
// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
// import Cafe from "./src/components/Cat";
// import Header from "./src/components/Header";
// import { NavigationContainer, DarkTheme } from "@react-navigation/native";

// const App = () => {
//   const [timesPressed, setTimesPressed] = useState(0);

//   let textLog = "";
//   if (timesPressed > 1) {
//     textLog = timesPressed + "x onPress";
//   } else if (timesPressed > 0) {
//     textLog = "onPress";
//   }

//   return (
//     <Text>Hello</Text>
//     <View style={styles.container}>
//       <ScrollView>
//         <Header />
//         <View>
//           <Pressable
//             onPress={() => {
//               setTimesPressed((current) => current + 1);
//             }}
//             style={({ pressed }) => [
//               {
//                 backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
//               },
//               styles.wrapperCustom,
//             ]}
//           >
//             {({ pressed }) => (
//               <Text style={styles.text}>
//                 {pressed ? "Pressed!" : "Press Me"}
//               </Text>
//             )}
//           </Pressable>
//           <View style={styles.logBox}>
//             <Text testID="pressable_press_console">{textLog}</Text>

//             {/* <Text style={styles.text}>yaasssss??</Text> */}
//           </View>
//           <Cafe />
//           <StatusBar style="auto" />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
// const MyTheme = {
//   ...DarkTheme,
//   // colors: {
//   //   ...DefaultTheme.colors,
//   //   dark: true,
//   //   primary: "rgb(255, 45, 85)",
//   // },
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: "10%",
//     backgroundColor: "darkcyan",
//     color: "green",
//     // color: "red",
//     fontWeight: "bold",
//     fontSize: 60,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "red",
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
// export default App;
