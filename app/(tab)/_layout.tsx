import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#101010",
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="search" color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="post/index"
        options={{
          title: "Post",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={28} name="plus-square" color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="userreact"
        options={{
          title: "User React",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={28} name="heart" color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-circle-o" color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
};

export default _layout;
