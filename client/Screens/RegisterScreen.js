import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  Alert,
  BackHandler,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const [showPassword, setshowPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setconfirmPassword(!confirmPassword);
  };

  const register = async () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert(
        "Invalid Details",
        "Please enter all the credentials",
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
    } else {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredentials._tokenResponse.email;
        const uid = auth.currentUser.uid;

        await setDoc(doc(db, "users", `${uid}`), {
          email: user,
          phone: phone,
        });

        // Navigate to the Main screen
        navigation.navigate("Main");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Handle the back press
        BackHandler.exitApp();
        return true; // Prevent default behavior (going back to the Login/Register screen)
      }
    );

    // Cleanup the event listener when the component is unmounted
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 24, fontWeight: "700" }}>
            Register
          </Text>

          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "500" }}>
            Create an Account
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email id"
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
              placeholder="Password"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={{ position: "absolute", right: 10, top: 15 }}
            >
              <Image
                source={
                  showPassword
                    ? require("../image/visible.png")
                    : require("../image/blocked.png")
                }
                style={{
                  marginTop: 20,
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Confirm Password
            </Text>

            <TextInput
              value={confirm}
              onChangeText={(text) => setConfirm(text)}
              secureTextEntry={!confirmPassword}
              placeholder="Password"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility1}
              style={{ position: "absolute", right: 10, top: 15 }}
            >
              <Image
                source={
                  confirmPassword
                    ? require("../image/visible.png")
                    : require("../image/blocked.png")
                }
                style={{
                  marginTop: 20,
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Phone
            </Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Enter your Phone No"
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>

        <Pressable
          onPress={register}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 30,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Already have an account?{" "}
            <Text style={{ color: "#003580" }}>Sign In</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flex: 0.4,
            height: 1,
            backgroundColor: "grey",
            marginHorizontal: 5,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "black",
            marginHorizontal: 10,
          }}
        >
          Or
        </Text>
        <View
          style={{
            flex: 0.4,
            height: 1,
            backgroundColor: "grey",
            marginHorizontal: 5,
          }}
        />
      </View>
      <View
        style={{
          paddingTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../image/facebook.png")}
          style={{ height: 30, width: 30, marginRight: 30 }}
        />
        <Image
          source={require("../image/google.png")}
          style={{ height: 30, width: 30, marginRight: 30 }}
        />
        <Image
          source={require("../image/twitter.png")}
          style={{ height: 30, width: 30 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
