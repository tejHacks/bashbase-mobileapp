import { Text, View } from "react-native";
import "../global.css";
import { Button } from "@react-navigation/elements";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-900">
      <Text className="text-3xl text-center font-bold text-white">
        Welcome to Nativewind!
      </Text>
      <Button className="text-center ">START PRAYING</Button>
    </View>
  );
}
