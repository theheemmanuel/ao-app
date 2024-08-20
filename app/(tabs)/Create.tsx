import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  return (
    <SafeAreaView className="bg-primary min-h-[100vh] px-5">
      <View>
        <Text className="text-white">Create</Text>
      </View>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
