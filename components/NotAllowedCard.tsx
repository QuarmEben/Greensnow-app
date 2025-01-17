import * as React from "react";
import { View, Image, Text } from "react-native";

import tw from "twrnc";


export const NotAllowedCard: React.FC = () => {
  return (
    <View className="flex flex-col text-xs font-semibold tracking-tight leading-6 rounded-none max-w-[363px] text-neutral-400">
      <View className="self-start">
        <Text>Not Allowed</Text>
      </View>
      <Image
        source={require("../app/assets/images/notallowed.png")}
        style = {tw`object-contain mt-2 w-full w-[363px] h-[152px] rounded-none aspect-[2.39]`}
      />
    </View>
  );
};