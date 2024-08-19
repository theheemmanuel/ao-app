import { Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import { StatusBar } from "expo-status-bar";

interface TabIconProps {
  icon: object;
  color: string;
  name: string;
  focused: boolean;
}
const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-semibold" : ""}`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const Tablayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          // tabBarLabelPosition: "top",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 2,
            borderTopColor: "#FFA001",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                color={color}
                name="Home"
                icon={require("../../assets/Icons/home.png")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                color={color}
                name="Bookmark"
                icon={require("../../assets/Icons/bookmark.png")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                color={color}
                name="Create"
                icon={require("../../assets/Icons/plus.png")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                color={color}
                name="Profile"
                icon={require("../../assets/Icons/profile.png")}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="auto" />
    </>
  );
};

export default Tablayout;
