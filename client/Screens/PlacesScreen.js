import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PropertyCard from "../Components/PropertyCard";
import { BottomModal, ModalPortal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ModalContent } from "react-native-modals";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import data from "./data";
const PlacesScreen = () => {
  const route = useRoute();

  // const data = [
  //   {
  //     id: "0",
  //     place: "Bangalore",
  //     placeImage:
  //       "https://images.pexels.com/photos/7630190/pexels-photo-7630190.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     shortDescription: "City in Karnataka, India",
  //     properties: [
  //       {
  //         id: "10",
  //         name: "FabParking Zone",
  //         image:
  //           "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=2067&q=80",
  //         address:
  //           "346, Hennur Main Road, Post, Kalyan Nagar, 560043 Bangalore, India ",
  //         price: 352,
  //         latitude: "13.0359",
  //         longitude: "77.6431",
  //         slots: [
  //           {
  //             id: "202",
  //             occupied: 0,
  //           },
  //           {
  //             id: "203",
  //             occupied: 0,
  //           },
  //           {
  //             id: "205",
  //             occupied: 1,
  //           },
  //         ],
  //       },
  //       {
  //         id: "11",
  //         name: "Park Inn Bangalore",
  //         image:
  //           "https://images.unsplash.com/photo-1616363088386-31c4a8414858?auto=format&fit=crop&w=2070&q=80",
  //         address:
  //           "648/B, Regenta Inn Indiranagar, Binnamangala 1st stage Indiranagar, 560038 Bangalore, India",
  //         price: 421,
  //         latitude: "12.9784",
  //         longitude: "77.6408",
  //         slots: [
  //           {
  //             id: "202",
  //             occupied: 1,
  //           },
  //           {
  //             id: "203",
  //             occupied: 0,
  //           },
  //           {
  //             id: "205",
  //             occupied: 1,
  //           },
  //         ],
  //       },
  //       {
  //         id: "12",
  //         name: "Bloom Parking - Airport",
  //         image:
  //           "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=2070&q=80",
  //         address:
  //           "Down Town Park, Sadahalli Gate, Kempegowda Int'l Airport Rd, 562157 Bangalore, India",
  //         price: 380,
  //         latitude: "13.1989",
  //         longitude: "77.7068",
  //         slots: [
  //           {
  //             id: "202",
  //             occupied: 0,
  //           },
  //           {
  //             id: "203",
  //             occupied: 0,
  //           },
  //           {
  //             id: "205",
  //             occupied: 0,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: "1",
  //     place: "Hyderabad",
  //     placeImage:
  //       "https://images.pexels.com/photos/9373357/pexels-photo-9373357.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     shortDescription: "City in Telangana, India",
  //     properties: [
  //       {
  //         id: "20",
  //         name: "ParkExpress",
  //         image:
  //           "https://images.unsplash.com/photo-1548554508-f01087f8cc0d?auto=format&fit=crop&w=2071&q=80",
  //         address:
  //           "CFC-4/C, Road No-2 Hardware Park, Beside TCS, Tukkuguda, 501351 Hyderabad, India",
  //         price: 432,
  //         slots: [
  //           {
  //             id: "202",
  //             occupied: 1,
  //           },
  //           {
  //             id: "203",
  //             occupied: 1,
  //           },
  //           {
  //             id: "205",
  //             occupied: 1,
  //           },
  //           {
  //             id: "206",
  //             occupied: 1,
  //           },
  //           {
  //             id: "207",
  //             occupied: 0,
  //           },
  //         ],
  //       },
  //       {
  //         id: "22",
  //         name: "Olive Parking",
  //         image:
  //           "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&w=1932&q=80",
  //         address:
  //           "Plot 73, Shilpi Valley, Gafoor Nagar, Madhapur, Opp Hitech City Mindspace, Hyderabad",
  //         price: 520,
  //         slots: [
  //           {
  //             id: "202",
  //             occupied: 0,
  //           },
  //           {
  //             id: "204",
  //             occupied: 1,
  //           },
  //           {
  //             id: "205",
  //             occupied: 0,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const navigation = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  var flag = "0";

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
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
  const filters = [
    {
      id: "0",
      filter: "Default",
    },
    {
      id: "1",
      filter: "Cost: Low to High",
    },
    {
      id: "1",
      filter: "Cost: High to Low",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (items.length > 0) return;

    setLoading(true);

    const fetchProducts = async () => {
      const colRef = collection(db, "places");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      setLoading(false);
      setSortedData(data);
    };
    fetchProducts();
  }, [items]);
  const searchPlaces = data?.filter(
    (item) => item.place === route.params.place
  );
  const [sortedData, setSortedData] = useState(items);
  searchPlaces.map((val) => val.properties.sort(compare));

  const compare = (a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return 1;
    }
    return 0;
  };

  const comparision = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  };

  const applyFilter = (filter) => {
    setModalVisibile(false);
    switch (filter) {
      case "Default":
        setSortedData(data);
        break;
      case "Cost: High to Low":
        searchPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchPlaces);
        break;
      case "Cost: Low to High":
        searchPlaces.map((val) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
        break;
    }
  };

  console.log(route.params);

  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          onPress={() => setModalVisibile(!modalVisibile)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>

        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate("Map", {
              searchResults: searchPlaces,
            })
          }
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>

      {loading ? (
        <Text>Fetching places....</Text>
      ) : (
        <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
          {sortedData
            ?.filter((item) => item.place == route?.params?.place)
            .map((item) =>
              item.properties.map((property, index) => (
                <PropertyCard
                  key={index}
                  selectedDates={route.params.selectedDates}
                  property={property}
                  slots={route.params.slots}
                />
              ))
            )}
        </ScrollView>
      )}

      <BottomModal
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom: 30,
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 280,
                borderRightWidth: 1,
                borderColor: "#E0E0E0",
              }}
            >
              <Text style={{ textAlign: "center" }}>Sort </Text>
            </View>

            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, index) => (
                <Pressable
                  onPress={() => setSelectedFilter(item.filter)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                  key={index}
                >
                  {selectedFilter.includes(item.filter) ? (
                    <FontAwesome name="circle" size={18} color="green" />
                  ) : (
                    <Entypo name="circle" size={18} color="black" />
                  )}

                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
