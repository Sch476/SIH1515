import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import pixelNormalize from "../Components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../Components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
    <>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: "500",
              marginHorizontal: 12,
            }}
          >
            Price for 1 Day
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 12,
              marginTop: 4,
              gap: 8,
            }}
          >
            <Text style={{ fontSize: 20 }}>Rs {route.params.price}</Text>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 7,
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 5,
              width: 78,
              borderRadius: 4,
            }}
          ></View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <View
            style={{
              margin: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check In
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check Out
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Amenities />

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
        </ScrollView>
      </SafeAreaView>

      <Pressable
        onPress={() =>
          navigation.navigate("User", {
            price: route.params.price,
            name: route.params.name,
            startDate: route.params.selectedDates.startDate,
            endDate: route.params.selectedDates.endDate,
          })
        }
        style={{
          backgroundColor: "#2D94E7",
          position: "absolute",
          bottom: 20,
          padding: 15,
          width: "95%",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Book Now
        </Text>
      </Pressable>
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
