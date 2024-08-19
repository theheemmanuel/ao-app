import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/logo.png";
import CustomButton from "@/components/NewCompo/CustomButton";
import { Redirect, router, Link } from "expo-router";
import FormField from "../../components/NewCompo/FormField";

const SignUp = () => {
  const [form, setform] = useState({ email: "", password: "", username: "" });
  const [submitting, setSubmitting] = useState(false);
  const Submit = () => {
    router.push("/Home");
  };
  return (
    <SafeAreaView className="bg-primary min-h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
          <Image
            source={logo}
            resizeMode="contain"
            className="w-[120px] h-[35px]"
          />
          <Text className="text-white text-2xl font-bold mt-10">
            Create an Account
          </Text>
          <FormField
            title="Username:"
            otherstyles="mt-7"
            value={form.username}
            handleChangeText={(e) => setform({ ...form, username: e })}
          />
          <FormField
            title="Email Address:"
            otherstyles="mt-7"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
          />
          <FormField
            title="Password:"
            otherstyles="mt-7"
            value={form.passowrd}
            handleChangeText={(e) => setform({ ...form, emapasswordil: e })}
          />
          <CustomButton
            customstyles="mt-7"
            Title="Sign Up"
            handlePress={Submit}
            isLoading={submitting}
          />
          <View className="justify-center pt-7 flex-row gap-2 items-center">
            <Text className="text-lg text-gray-100 font-semibold">
              Already have an Account?
            </Text>
            <Link
              className="font-semibold text-secondary text-lg border px-2 border-secondary rounded-md"
              href="SignIn"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
