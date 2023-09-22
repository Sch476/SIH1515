import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import SearchResults from "../Components/SearchResults";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const data = [
    {
      id: "0",
      place: "Bangalore",
      placeImage:
        "https://images.pexels.com/photos/7630190/pexels-photo-7630190.jpeg?auto=compress&cs=tinysrgb&w=800",
      shortDescription: "City in Karnataka, India",
      properties: [
        {
          id: "10",
          name: "FabParking Zone",
          image:
            "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=2067&q=80",
          address:
            "346, Hennur Main Road, Post, Kalyan Nagar, 560043 Bangalore, India ",
          price: 352,
          latitude: "13.0359",
          longitude: "77.6431",
          slots: [
            {
              id: "202",
              occupied: 0,
            },
            {
              id: "203",
              occupied: 0,
            },
            {
              id: "205",
              occupied: 1,
            },
          ],
        },
        {
          id: "11",
          image:
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=2070&q=80",
          name: "Park Inn Bangalore",
          address:
            " 648/B, Regenta Inn Indiranagar, Binnamangala 1st stage Indiranagar, 560038 Bangalore, India",
          price: 420,
          latitude: "12.9784",
          longitude: "77.6408",
          slots: [
            {
              id: "202",
              occupied: 1,
            },
            {
              id: "203",
              occupied: 0,
            },
            {
              id: "205",
              occupied: 1,
            },
          ],
        },
        {
          id: "12",
          name: "Bloom Parking - Airport",
          address:
            "Down Town Park, Sadahalli Gate, Kempegowda Int'l Airport Rd, 562157 Bangalore, India",
          price: 380,
          latitude: "13.1989",
          longitude: "77.7068",
          slots: [
            {
              id: "202",
              occupied: 0,
            },
            {
              id: "203",
              occupied: 0,
            },
            {
              id: "205",
              occupied: 0,
            },
          ],
        },
      ],
    },
    {
      id: "2",
      place: "Hyderabad",
      placeImage:
        "https://images.pexels.com/photos/9373357/pexels-photo-9373357.jpeg?auto=compress&cs=tinysrgb&w=800",
      shortDescription: "City in Telangana, India",
      properties: [
        {
          id: "20",
          name: "ParkExpress",
          address:
            "CFC-4/C, Road No-2 Hardware Park, Beside TCS, Tukkuguda, 501351 Hyderabad, India",
          price: 432,
          slots: [
            {
              id: "202",
              occupied: 1,
            },
            {
              id: "203",
              occupied: 1,
            },
            {
              id: "205",
              occupied: 1,
            },
            {
              id: "206",
              occupied: 1,
            },
            {
              id: "207",
              occupied: 0,
            },
          ],
        },
        {
          id: "22",
          name: "Olive Parking",
          image:
            "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?auto=format&fit=crop&w=1932&q=80",
          address:
            "Plot 73, Shilpi Valley, Gafoor Nagar, Madhapur, Opp Hitech City Mindspace, Hyderabad",
          price: 520,
          slots: [
            {
              id: "202",
              occupied: 0,
            },
            {
              id: "204",
              occupied: 1,
            },
            {
              id: "205",
              occupied: 0,
            },
          ],
        },
      ],
    },
  ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length > 0) return;

    const fetchProducts = async () => {
      const colRef = collection(db, "places");

      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
    };

    fetchProducts();
  }, [items]);
  console.log(items);
  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 45,
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#FFC72C",
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

      <SearchResults data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
