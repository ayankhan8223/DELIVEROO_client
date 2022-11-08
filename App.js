import {StatusBar} from "expo-status-bar";
import {Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import BasketScreen from "./screens/BasketScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import {store} from "./store";
import {Provider} from "react-redux";
import DeliveryScreen from "./screens/DeliveryScreen";
import PreaparingOrderScreen from "./screens/PreaparingOrderScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{presentation: "modal", headerShown: false}}
          />
          <Stack.Screen
            name="PreaparingOrderScreen"
            component={PreaparingOrderScreen}
            options={{presentation: "fullScreenModal", headerShown: false}}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{presentation: "fullScreenModal", headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
