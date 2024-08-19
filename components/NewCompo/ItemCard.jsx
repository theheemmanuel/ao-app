import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const ItemCard = ({ data }) => {
  const [load, setload] = useState(false);
  return (
    <View className="flex-col px-4 mb-14">
      <View className="flex-row justify-between">
        <View className="flex-row gap-3 items-start">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-1">
            <Image
              source={{ uri: data.image }}
              resizeMode="contain"
              className="w-full h-full object-contain"
            />
          </View>
          <View className="">
            <Text className="text-white text-lg capitalize">
              {data.category}
            </Text>
            <Text className="text-gray-400">{data.price}</Text>
          </View>
        </View>

        <Image
          source={require("../../assets/Icons/menu.png")}
          resizeMode="contain"
          className="h-6"
        />
      </View>
      {load ? (
        <Text className="text-white py-4 text-center font-bold text-xl">
          Loading..
        </Text>
      ) : (
        <View>
          <TouchableOpacity
            className="my-4 justify-center items-center relative w-full h-[220px]"
            activeOpacity={0.7}
            onPress={() => setload((prev) => !prev)}
          >
            <Image
              source={{ uri: data.image }}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />

            <Image
              source={require("../../assets/Icons/play.png")}
              className="absolute h-12"
              resizeMode="contain"
              tintColor="gray"
            />
          </TouchableOpacity>
        </View>
      )}
      {/* <View className="my-4">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setload((prev) => !prev)}
        >
          {load ? (
            <Text className="text-white py-4 text-center font-bold text-xl">
              Loading...
            </Text>
          ) : (
            <Image
              source={{ uri: data.image }}
              className="w-full h-[220px] rounded-xl"
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
