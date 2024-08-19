import { TouchableOpacity, Text } from "react-native";
import React from "react";

// interface TitleProps {
//   Title: string;
//   handlePress: any;
//   isLoading: boolean;
//   customstyles: string;
// }

const CustomButton = ({ Title, handlePress, isLoading, customstyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary items-center justify-center px-4 min-h-[62px] rounded-xl ${
        isLoading ? "opacity-50" : ""
      } ${customstyles}`}
      disabled={isLoading}
    >
      <Text className="font-bold text-primary text-xl">{Title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
