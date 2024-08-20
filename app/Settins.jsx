import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settins = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>Settins</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Notifications")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settins;

const styles = StyleSheet.create({});
