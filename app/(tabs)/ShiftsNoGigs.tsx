import React from "react";
import { View, Image, Text } from "react-native";

import tw from "twrnc";
import { UserHeader } from "../../components/UserHeader";
import { NavigationBar } from "../../components/NavigationBar";
import { WeekCalendar } from "../../components/WeekCalendar";

export const ShiftsNoGigs: React.FC = () => {
  return (
    <View style={tw`flex-1 overflow-hidden flex-col items-center px-3 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <UserHeader 
      avatarUrl={require("../../assets/images/avatar.png")}
      username="Angela"
      />
      <View style={tw`flex-1 flex-row items-center max-w-[480px] w-full`}>
        <WeekCalendar />
        <View style={tw`flex-col items-center text-center w-[270px] max-w-[480px]`}>
          <Image
            source={require("../../assets/images/clipboard.png")}
            style = {tw`object-contain mt-20 max-w-full aspect-[1.03] w-[237px] h-[231px]`}
            className="object-contain mt-20 max-w-full aspect-[1.03] w-[237px]"
          />
          <View style = {tw`mt-16 text-2xl font-extrabold tracking-tighter text-stone-900 w-[251px]`} className="mt-16 text-2xl font-extrabold tracking-tighter leading-6 text-stone-900 w-[251px]">
            <Text style = {tw`text-2xl font-extrabold text-center tracking-tighter leading-6 text-stone-900`}>
              You have no gigs{'\n'}available on this date
            </Text>
          </View>
        </View>
      </View>
      
      <NavigationBar />
    </View>
  );
};
