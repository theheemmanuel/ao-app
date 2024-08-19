import { FlatList, Text, View } from "react-native";
import React from "react";

const Tranding = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text className="text-white">{item.title}</Text>
      )}
      horizontal
    />
  );
};

export default Tranding;
