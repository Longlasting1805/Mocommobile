import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopNavbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navText}>Home</Text>
      <Text style={styles.navText}>Shop All</Text>
      <Text style={styles.navText}>Blog</Text>
      <Text style={styles.navText}>About Us</Text>
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