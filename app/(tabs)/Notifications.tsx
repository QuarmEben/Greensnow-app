import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import tw from "twrnc";
import { NavigationBar } from "../../components/NavigationBar";
import { UserHeader } from "../../components/UserHeader";
import { NotificationItem } from "../../components/NotificationItem";



export const Notifications: React.FC = () => {
  return (
    <View style={tw`flex-1 overflow-hidden flex-col items-center px-4 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <UserHeader 
      avatarUrl={require("../../assets/images/avatar.png")}
      username="Evanela"
      />
      <View style={tw`mt-10`}>
      <ScrollView>
      <NotificationItem 
        iconUrl={require("../../assets/images/bag.png")}
        title="You took the shift"
        message="Review shift details and prepare for it."
      />
      <NotificationItem 
        iconUrl={require("../../assets/images/clipboardwithcheck.png")}
        title="Completion confirmed"
        message="Employer has verified your shift has ended."
      />
      <NotificationItem 
        iconUrl={require("../../assets/images/calendarnotification.png")}
        title="Starting shift confirmed"
        message="Employer has verified your shift has started."
      />
      <NotificationItem 
        iconUrl={require("../../assets/images/personcircled.png")}
        title="Profile verified"
        message="Management has cleared you to pick shifts."
      />
      </ScrollView>
      </View>
      <NavigationBar/>
    </View>
  );
};



