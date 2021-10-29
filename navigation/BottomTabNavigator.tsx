import {
  Ionicons,
  Entypo,
  EvilIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import * as React from "react";
import { Button, SafeAreaView } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import AlbumScreen from "../screens/AlbumScreen";
import PlayerScreen from "../screens/PlayerScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import Navigation from ".";
import PlayerWidget from "../components/PlayerWidget";
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <>
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: Colors[colorScheme].tint,
        }}
      >
        {/* use custom tabIcon component in tabBarIcon prop*/}
        <BottomTab.Screen
          name="Home"
          component={TabOneNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo
                size={25}
                style={{ marginBottom: -3 }}
                name="home"
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={TabOneNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <EvilIcons
                size={25}
                style={{ marginBottom: -3 }}
                name="search"
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Library"
          component={TabOneNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                size={25}
                style={{ marginBottom: -3 }}
                name="library-music"
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Premium"
          component={TabOneNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5
                size={25}
                style={{ marginBottom: -3 }}
                name="spotify"
                color={color}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
      <PlayerWidget />
    </>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator initialRouteName="HomeScreen">
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <TabOneStack.Screen name="AlbumScreen" component={AlbumScreen} />
    </TabOneStack.Navigator>
  );
}
