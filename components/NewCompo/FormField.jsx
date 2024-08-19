import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherstyles,
}) => {
  return (
    <View className={`space-y-2 ${otherstyles}`}>
      <Text className="text-base text-gray-200 font-semibold">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 rounded-2xl focus:border-secondary bg-black">
        <TextInput
          className="flex-1 text-white font-semibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText }
        />
      </View>
    </View>
  );
};

export default FormField;
