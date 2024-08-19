import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo.png";
import cards from "../assets/images/cards.png";
import path from "../assets/images/path.png";
import CustomButton from "../components/NewCompo/CustomButton";

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-[80vh] items-center justify-center px-8">
          <Image
            source={logo}
            resizeMode="contain"
            className="h-[84px] max-w-[130px]"
          />
          <Image
            source={cards}
            resizeMode="contain"
            className="h-[300px] max-w-[380px]"
          />
          <View className="relative mt-5">
            <Text className="text-white text-center text-5xl font-bold">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary">Aora</Text>
            </Text>
            <Image
              resizeMode="contain"
              source={path}
              className="absolute -right-8 -bottom-3 w-[136px] h-[15px]"
            />
          </View>
          <Text className="text-lg text-gray-100 mt-7 text-center">
            Where Creativity meets innovation: embark on z journey of limitlrss
            exploration
          </Text>
          <CustomButton
            customstyles="w-full mt-7"
            handlePress={() => router.push("/SignIn")}
            Title="Login with Email"
          />
          <CustomButton
            customstyles="w-full mt-7"
            handlePress={() => router.push("/Home")}
            Title="Homepage"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default index;
