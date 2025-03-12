import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

const TopNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => router.push("/home")}>
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/shop-all")}>
        <Text style={styles.navText}>Shop All</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/blog")}>
        <Text style={styles.navText}>Blog</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/about-us")}>
        <Text style={styles.navText}>About Us</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#6200EE",
  },
  navText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TopNavbar;