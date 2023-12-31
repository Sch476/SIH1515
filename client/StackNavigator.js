import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import Profile from "./Screens/Profile";
import Bookings from "./Screens/Bookings";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./Screens/SearchScreen";
import LoginPage from "./Screens/LoginPage";
import RegisterScreen from "./Screens/RegisterScreen";
import PlacesScreen from "./Screens/PlacesScreen";
import MapScreen from "./Screens/MapScreen";
import PropertyInfoScreen from "./Screens/PropertyInfoScreen";
import SlotsScreen from "./Screens/SlotsScreen";
import UserScreen from "./Screens/UserScreen";
import ConfirmationScreen from "./Screens/ConfirmationScreen";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#003580" />
              ) : (
                <AntDesign name="home" size={24} color="#003580" />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={Bookings}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="bookmark" size={24} color="#003580" />
              ) : (
                <FontAwesome name="bookmark-o" size={24} color="#003580" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="person-circle-sharp"
                  size={24}
                  color="#003580"
                />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={24}
                  color="#003580"
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Places" component={PlacesScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Info" component={PropertyInfoScreen} />
        <Stack.Screen name="Slots" component={SlotsScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
