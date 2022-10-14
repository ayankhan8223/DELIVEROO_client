import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeatureRow = ({ id, title, description }) => {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type=='featured'&&_id==$id]{
    ...,
    restaurant[]->{
      ...,
      dishes[]->
    }
  }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurant(data?.restaurant);
      });
  }, []);
  return (
    <View className="px-4">
      <View className="flex-row mt-4 items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={30} color="#00CCBB" />
      </View>

      <Text className="text-sm text-gray-500">{description}</Text>

      <ScrollView
        className="pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 0,
        }}
      >
        {restaurant?.map((res) => (
          <RestaurantCard
            key={res._id}
            id={res._id}
            imgUrl={res.image}
            title={res.name}
            rating={res.rating}
            genre={res.type?.name}
            address={res.address}
            short_description={res.short_description}
            dishes={res.dishes}
            long={res.long}
            lat={res.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
