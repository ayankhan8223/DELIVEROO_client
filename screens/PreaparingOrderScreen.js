import {View, SafeAreaView, Text} from "react-native";
import React, {useEffect} from "react";
import Lottie from "lottie-react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import {useNavigation} from "@react-navigation/native";

const PreaparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <View>
        <View className="w-96 h-96">
          <Lottie
            source={require("../assets/99558-delivery-food-splash.json")}
            autoPlay
            loop
          />
        </View>
        <View className="flex items-center justify-center">
          <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            className="text-lg my-10 font-bold text-center text-gray-500"
          >
            Waiting for Restaurant to accept your order!
          </Animatable.Text>
          <Progress.Circle
            size={50}
            indeterminate={true}
            color={"#00CCBB"}
            thickness={50}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreaparingOrderScreen;
