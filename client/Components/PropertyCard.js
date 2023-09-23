import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({ property, selectedDates }) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  var count = 0;
  for (var i = 0; i < property.slots.length; i++) {
    if (!property.slots[i].occupied) {
      count++;
    }
  }

  if (count) {
    return (
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate("Info", {
              name: property.name,
              price: property.price,
              slots: property.slots,
              selectedDates: selectedDates,
            })
          }
          style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
        >
          <View>
            <Image
              style={{ height: height / 4, width: width - 280 }}
              source={{ uri: property.image }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  width: 210,
                  marginTop: 6,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {property.name}
              </Text>
            </View>

            <Text
              style={{
                width: 210,
                marginTop: 6,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              {property.address.length > 50
                ? property.address.substr(0, 50)
                : property.address}
            </Text>
            <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
              No. of Slots currently available: {count}
            </Text>
            <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
              Price for 1 Day Booking
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text style={{ fontSize: 18 }}>Rs {property.price}</Text>
            </View>

            <View
              style={{
                backgroundColor: "#6082B6",
                paddingVertical: 2,
                marginTop: 2,
                borderRadius: 5,
                width: 150,
                paddingHorizontal: 3,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Limited Time deal
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View>
        <Pressable
          style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
        >
          <View>
            <Image
              style={{ height: height / 4, width: width - 280 }}
              source={{ uri: property.image }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  width: 210,
                  marginTop: 6,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {property.name}
              </Text>
            </View>

            <Text
              style={{
                width: 210,
                marginTop: 6,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              {property.address.length > 50
                ? property.address.substr(0, 50)
                : property.address}
            </Text>
            <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
              No. of Slots currently available: {count}
            </Text>
            <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
              Price for 1 Day Booking
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text style={{ fontSize: 18 }}>Sorry, no slots available</Text>
            </View>

            <View
              style={{
                backgroundColor: "#6082B6",
                paddingVertical: 2,
                marginTop: 2,
                borderRadius: 5,
                width: 150,
                paddingHorizontal: 3,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Limited Time deal
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
};

export default PropertyCard;

const styles = StyleSheet.create({});
