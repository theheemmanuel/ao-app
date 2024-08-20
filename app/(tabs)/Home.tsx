import { Text, View, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/NewCompo/SearchInput";
import Tranding from "../../components/NewCompo/Tranding";
import EmptyState from "../../components/NewCompo/EmptyState";
import useFetchApp from "../../components/NewCompo/useFetchApp";
import ItemCard from "../../components/NewCompo/ItemCard";

const Home = () => {
  const [refreshing, setrefreshing] = useState(false);

  const onRefresh = async () => {
    setrefreshing(true);
    await refetch();
    setrefreshing(false);
  };

  const { data, refetch, loading } = useFetchApp();
  // console.log(data);
  return (
    <SafeAreaView className="bg-primary min-h-[100vh] px-5">
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <ItemCard data={item} />}
        ListHeaderComponent={
          <View className="mb-8">
            <View className="justify-between flex-row items-center my-6">
              <View className="">
                <Text className="text-gray-300 font-semibold text-xl">
                  Welcome Back
                </Text>
                <Text className="text-4xl text-white font-bold">
                  HeeTech Solut
                </Text>
              </View>
              <View>
                <Image
                  source={require("../../assets/images/logo-small.png")}
                  resizeMode="contain"
                  className="h-12 w-9"
                />
              </View>
            </View>
            <SearchInput value={""} handleChangeText={""} />

            <View>
              <Text className="mb-8 mt-5 text-white font-bold text-2xl">
                Latest Videos
              </Text>
              <Tranding
                posts={data.filter(
                  (item: any) => item.category === "electronics"
                )}
              />
            </View>
          </View>
        }
        ListEmptyComponent={() => (
          <View>
            <EmptyState
              title="Be the first person to add a content"
              subtitle="No Contents Found"
            />
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
