import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    client
      .fetch(
        `*[_type=='featured']{
  ...,
  restaurant[]->{
    ...,
    dishes[]->
  }
}`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row mx-4 pb-3 pt-[40px] items-center space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-sm">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-4 mx-4">
        <View className="bg-gray-200 flex-row space-x-2 p-3 items-center flex-1">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurents and cusines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon size={20} color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* categories */}
        <Categories />

        {featuredCategories?.map((cat) => (
          <FeatureRow
            key={cat._id}
            id={cat._id}
            title={cat.name}
            description={cat.short_description}
            featureCategory="featured"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
