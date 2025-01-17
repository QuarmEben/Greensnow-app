import React from "react";
import { View, Image, Text } from "react-native";

import tw from "twrnc";
import { UserHeader } from "../../components/UserHeader";
import { NavigationBar } from "../../components/NavigationBar";

export const HomeNotVerified: React.FC = () => {
  return (
    <View style={tw`flex-1 overflow-hidden flex-col items-center px-3 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <UserHeader 
      avatarUrl={require("../../assets/images/avatar.png")}
      username="Angela"
      />
      <Image
        source={require("../../assets/images/clipboard.png")}
        style = {tw`object-contain mt-20 max-w-full aspect-[1.03] w-[237px] h-[231px]`}
      />
      <View style = {tw`mt-16 text-2xl font-extrabold tracking-tighter text-stone-900 w-[251px]`}>
        <Text style = {tw`text-2xl font-extrabold text-center tracking-tighter leading-6 text-stone-900`}>
          You are not verified{'\n'}for picking gigs yet
        </Text>
      </View>
      <View style = {tw`mt-4`}>
        <Text style = {tw`text-xs tracking-tight text-zinc-500`}>
          Finish up your registration to make yourself viable for gigs. You have completed <Text style = {tw`font-extrabold`}>20%</Text> of your account setup
        </Text>
      </View>
      <View style = {tw`mt-5 text-xs font-bold tracking-tight text-stone-900`}>
        <Text style = {tw`text-xs font-bold tracking-tight text-stone-900 underline`}>Finish account setup</Text>
      </View>
      <NavigationBar />
    </View>
  );
};
