import React from "react";
import { Text, TextInput, View, Image } from "react-native";

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
      <Text>Meow!</Text>
      <Image
        source={{
          uri: "https://geekologie.com/2019/08/28/crazy-maine-coon-cat.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
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

export default Cafe;
