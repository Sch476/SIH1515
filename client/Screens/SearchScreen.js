import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView style={{ marginTop: 40 }}>
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#003580",
          borderWidth: 4,
          borderRadius: 10,
        }}
      >
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Enter Your Destination"
        />
        <Feather name="search" size={22} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
