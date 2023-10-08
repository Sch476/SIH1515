import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const ProfilePage = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
    // You may want to navigate to a login screen or perform other logout actions
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://placekitten.com/200/200" }}
        style={styles.profileImage}
      />
      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.bio}>Software Developer</Text>

      {/* Logout Button */}
      <Button title="Logout" onPress={handleLogout} />

      {/* Add more information and components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
});

export default ProfilePage;
