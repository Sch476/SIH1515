import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const BookingScreen = () => {
  const bookings = useSelector((state) => state.booking.booking);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
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
  return (
    <SafeAreaView>
      {bookings.length > 0 &&
        bookings.map((item) => (
          <Pressable
            style={{
              backgroundColor: "white",
              marginVertical: 10,
              marginHorizontal: 20,
              borderColor: "#E0E0E0",
              borderWidth: 1,
              padding: 14,
              borderRadius: 6,
            }}
          >
            <View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Text
                  style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
                >
                  Booked
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Text
                  style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
                >
                  Check in: {item.startDate} & Check out: {item.endDate}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
