import React, { useState } from "react";
import {
  Text,
  TextInput,
  ScrollView,
  Image,
  View,
  StyleSheet,
} from "react-native";

const Cat = () => {
  const [text, setText] = useState("");
  return (
    <ScrollView>
      <TextInput
        style={{ height: 40, backgroundColor: "purple", padding: "10%" }}
        placeholder="Type here to talk to the cat!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "😸")
          .join(" ")}
      </Text>
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
      <Text style={styles.greeting}>Welcome!</Text>
      <Cat />
    </View>
  );
};
const styles = StyleSheet.create({
  kitty: {
    color: "green",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  greeting: {
    fontSize: 60,
  },
});

export default Cafe;
