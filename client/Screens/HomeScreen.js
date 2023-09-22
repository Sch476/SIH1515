import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import { Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  useLayoutEffect(() => {
    setModalVisibile(true),
      navigation.setOptions({
        headerShown: true,
        title: "Smart Parking",
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
        headerRight: () => (
          <Ionicons
            name="ios-notifications"
            size={24}
            color="white"
            style={{ marginRight: 12 }}
          />
        ),
      });
  }, []);

  const searchPlaces = (place) => {
    if (!route?.params || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
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
    console.log(route?.params?.input);
    if (route?.params && selectedDates) {
      navigation.navigate("Places", {
        selectedDates: selectedDates,
        place: route?.params?.input,
      });
    }
  };

  return (
    <View>
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "#003580",
            borderWidth: 3,
            borderRadius: 6,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#003580",
              borderWidth: 2,
              paddingVertical: 15,
            }}
            onPress={() => navigation.navigate("Search")}
          >
            <Ionicons name="md-search" size={24} color="black" />
            <TextInput id="destination" placeholder="Enter Destination" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#003580",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Entypo name="calendar" size={24} color="black" />
            <DatePicker
              style={{
                width: 350,
                height: 30,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "transparent",
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
                headerStyle: {
                  backgroundColor: "#003580",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
              }}
              selectedBgColor="#0047AB"
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDates(startDate, endDate)
              }
              allowFontScaling={false}
              placeholder={"Select Your Dates"}
              mode={"range"}
            />
          </Pressable>
          <Pressable
            onPress={() => searchPlaces(route?.params?.input)}
            style={{
              paddingHorizontal: 10,
              borderColor: "#003580",
              borderWidth: 2,
              paddingVertical: 15,
              backgroundColor: "#2a52be",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "500",
                color: "white",
              }}
            >
              Search
            </Text>
          </Pressable>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 19,
            color: "#383E3E",
            fontStyle: "normal",
            marginHorizontal: 10,
          }}
        >
          Now Searching a Parking Lot has become{" "}
          <Text style={{ fontWeight: "bold" }}>Easier!!</Text>
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              backgroundColor: "#003580",
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              Innovative
            </Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              An Innovative Parking Solution.
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: "#E0E0E0",
              borderWidth: 2,
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              15% Discounts
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Pay using UPI and get upto 15% discounts
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: "#E0E0E0",
              borderWidth: 2,
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              10% Discounts
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Qui magna proident qui laborum labore fugiat.
            </Text>
          </Pressable>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
