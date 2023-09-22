import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const dispatch = useDispatch();
  const confirmBooking = async () => {
    dispatch(savedPlaces(route.params));
    navigation.navigate("Confirmation", {
      price: route.params.price,
      name: route.params.name,
      startDate: route.params.startDate,
      endDate: route.params.endDate,
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [rcNo, setRcNo] = useState("");
  const platePattern = /^[A-Z]{2}[ -]?[0-9]{2}[ -]?[A-Z]{1,2}[ -]?[0-9]{4}$/;

  const finalStep = () => {
    if (!name || !email || !phoneNo || !rcNo || !platePattern.test(rcNo)) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the fields correctly.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    if (name && email && phoneNo && rcNo && platePattern.test(rcNo)) {
      confirmBooking();
    }
  };
  return (
    <>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>Full Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Phone No</Text>
          <TextInput
            value={phoneNo}
            onChangeText={(text) => setPhoneNo(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
          <Text>Vehicle Registration No</Text>
          <TextInput
            value={rcNo}
            onChangeText={(text) => setRcNo(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 0,
          padding: 30,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              marginTop: 4,
              gap: 8,
            }}
          >
            <Text style={{ fontSize: 20 }}>Rs {route.params.price}</Text>
          </View>
        </View>
        <Pressable
          onPress={finalStep}
          style={{ backgroundColor: "#007FFF", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
