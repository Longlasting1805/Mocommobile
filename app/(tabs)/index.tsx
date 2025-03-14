import { AppRegistry } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/screens/HomeScreen";
import ShopAllScreen from "@/screens/ShopAllScreen";
import BlogScreen from "@/screens/BlogScreen";
import AboutUsScreen from "@/screens/AboutUsScreen";
import TopNavbar from "@/components/TopNavbar";
import appConfig from "../../app.json";


const appName = appConfig.expo.name;

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <TopNavbar />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shop All" component={ShopAllScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="About Us" component={AboutUsScreen} />
      </Stack.Navigator>
    </>
  );
};

export default App;

AppRegistry.registerComponent(appName, () => App);

