import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [showPassword, setshowPassword] = useState(false);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential.user;
      console.log("user details", user);
    });
  };

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.replace("Main");
        }
      });

      return unsubscribe;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

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
            Sign In
          </Text>

          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "500" }}>
            Sign In to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
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
        </View>

        <Pressable
          onPress={login}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
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
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Don't have an account?{" "}
            <Text style={{ color: "#003580" }}>Sign Up</Text>
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

export default LoginPage;

const styles = StyleSheet.create({});
