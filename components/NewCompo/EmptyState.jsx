import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../NewCompo/CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="space-2 items-center">
      <Image
        source={require("../../assets/images/empty.png")}
        resizeMode="contain"
        className=" h-[200px]"
      />
      <Text className="text-white text-3xl">{subtitle}</Text>
      <Text className="text-gray-200 text-lg mb-6">{title}</Text>
      <CustomButton
        Title="Create New Video"
        handlePress={() => router.push("/Create")}
        customstyles="w-full"
      />
    </View>
  );
};

export default EmptyState;
