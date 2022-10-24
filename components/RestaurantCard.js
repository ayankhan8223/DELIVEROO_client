import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="mr-5 w-[250px] rounded-full"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      <View>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-64 h-36 rounded-sm"
        />
        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">
              <Text className="text-green-500">{rating}</Text> - {genre}
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <MapPinIcon color="grey" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
