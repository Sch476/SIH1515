import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <Text style={styles.title}>Login Form</Text>

        <View style={styles.card}>
          {/* Email / Phone Input */}
          <View style={styles.inputRow}>
            <View style={styles.iconBox}>
              <Text style={styles.iconText}>👤</Text>
            </View>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email or Phone"
              placeholderTextColor="#999"
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputRow}>
            <View style={styles.iconBox}>
              <Text style={styles.iconText}>🔒</Text>
            </View>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#999"
              style={styles.input}
            />
          </View>

          {/* Forgot Password */}
          <Pressable style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </Pressable>

          {/* Login Button */}
          <Pressable onPress={login} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>

          {/* Sign Up Link */}
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={styles.signupContainer}
          >
            <Text style={styles.signupText}>
              Not a member?{" "}
              <Text style={styles.signupLink}>Signup now</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2dba8b",
  },
  keyboardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 25,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 20,
  },
  iconBox: {
    backgroundColor: "#1a6b4a",
    width: 40,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  iconText: {
    fontSize: 18,
    color: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 10,
  },
  forgotContainer: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  forgotText: {
    fontSize: 14,
    color: "#555",
  },
  loginButton: {
    backgroundColor: "#1a6b4a",
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    alignItems: "center",
  },
  signupText: {
    fontSize: 14,
    color: "#555",
  },
  signupLink: {
    color: "#1a6b4a",
    fontWeight: "bold",
  },
});
