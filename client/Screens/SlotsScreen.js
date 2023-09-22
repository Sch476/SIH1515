import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Amenities from "../Components/Amenities";

const SlotsScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Slots",
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
  const [selected, setSelected] = useState([]);
  return (
    <>
      <ScrollView>
        {route?.params?.slots.map((item, index) => (
          <Pressable
            style={{ margin: 10, backgroundColor: "white", padding: 10 }}
            key={index}
            name={route.params.name}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#007FFF", fontSize: 17, fontWeight: "500" }}
              >
                {route.params.name}
              </Text>
              <AntDesign name="infocirlceo" size={24} color="#007FFF" />
            </View>
            <Text style={{ marginTop: 3, fontSize: 16 }}>
              Pay at the parking
            </Text>
            <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>
              Free cancellation Available
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 18 }}> Rs. {route.params.price}</Text>
            </View>
            <Amenities />
            {console.log(route.params.name)}
            {selected.includes(route?.params.name) ? (
              <Pressable
                style={{
                  borderColor: "#318CE7",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#318CE7",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(route.params.name)}
                style={{
                  borderColor: "#007FFF",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#007FFF",
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
              price: route.params.price,
              name: route.params.name,
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            })
          }
          style={{
            backgroundColor: "#007FFF",
            padding: 8,
            marginBottom: 30,
            borderRadius: 3,
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Reserve
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default SlotsScreen;

const styles = StyleSheet.create({});
