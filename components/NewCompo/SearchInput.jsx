import { Image, Text, TextInput, View } from "react-native";
import React from "react";

const SearchInput = ({ handleChangeText, value }) => {
  return (
    <View className="my-6 w-full h-16 px-4 rounded-2xl focus:border-secondary bg-gray-800 flex-row justify-between items-center">
      <TextInput
        className="flex-1 text-white font-semibold"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />
      <Image
        source={require("../../assets/Icons/search.png")}
        resizeMode="contain"
        className="h-4 w-4"
      />
    </View>
  );
};

export default SearchInput;
