import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import useFetchApp from "./useFetchApp";

const Tranding = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="m-4">
          <View className="w-[300px] h-[350px]">
            <Image
              source={{ uri: item.image }}
              className="w-full h-3/4"
              resizeMode="cover"
            />
            <Text className="text-white text-2xl text-center">
              {item.price}
            </Text>
          </View>
        </View>
      )}
      horizontal
    />
  );
};

export default Tranding;
