import * as React from "react";
import { View, Image, Text } from "react-native";
import { NavigationItemProps } from "./types";

import tw from "twrnc";

const navigationItems = [
    { icon: require("../assets/images/home.png"), label: "Home", route: "Home"},
    { icon: require("../assets/images/briefcase.png"), label: "Shifts", route: "Shifts"},
    { icon: require("../assets/images/bell.png"), label: "Notifications", route: "Notifications"},
    {
      icon: require("../assets/images/history.png"),
      label: "History",
      route: "History"
    },
];

export const NavigationBar: React.FC = () => {
  return (
    <View style={tw`flex flex-col text-xs tracking-tight text-center whitespace-nowrap rounded-none max-w-[342px] text-neutral-400 absolute bottom-1`}>
      <View style={tw`flex flex-col justify-center px-9 py-2.5 w-full h-[60px] w-[342px] bg-green-700 rounded-xl`}>
        <View style={tw`flex flex-row gap-8 items-center`}>
          {/* <View style={tw`flex flex-row shrink-0 self-stretch my-auto w-9 h-[43px]`} /> */}
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={index}
              iconUrl={item.icon}
              label={item.label}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

  
const NavigationItem: React.FC<NavigationItemProps> = ({ iconUrl, label }) => {
    return (
      <View style={tw`flex flex-col items-center self-stretch my-auto`}>
        <Image
          source={ iconUrl }
          style={tw`object-contain w-5 aspect-square`}
        />
        <View>
          <Text style={tw`text-xs tracking-tight text-center whitespace-nowrap rounded-none text-neutral-400`}>{label}</Text>
        </View>
      </View>
    );
  };