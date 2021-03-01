import React from "react";
import {
  Text,
  TextInput,
  ScrollView,
  Image,
  View,
  StyleSheet,
} from "react-native";

const Cat = () => {
  return (
    <ScrollView>
      <Text>I am also a cat!</Text>
      <Text style={styles.kitty}>Meow!</Text>
      <Image
        source={{
          uri: "https://geekologie.com/2019/08/28/crazy-maine-coon-cat.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
    </ScrollView>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
};
const styles = StyleSheet.create({
  kitty: {
    color: "green",
    fontWeight: "bold",
    fontSize: 60,
  },
});

export default Cafe;
