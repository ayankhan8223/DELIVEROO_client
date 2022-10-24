import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon,PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems } from "../features/basketSlice";


const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed,setIsPressed]=useState(false)
    const dispatch=useDispatch()
    const items=useSelector(selectBasketItems)
    const addItemToBasket =()=>{
dispatch(addToBasket({ id, name, description, price, image }))
    }
  return (
    <>
      <TouchableOpacity className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`} onPress={()=>setIsPressed(!isPressed)}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity>
              <MinusCircleIcon size={40} color='#00CCBB'/>
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color='#00CCBB'/>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
