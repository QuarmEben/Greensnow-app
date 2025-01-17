import React from "react";
import { View, Image, Text } from "react-native";

import tw from "twrnc";
import { UserHeader } from "../../components/UserHeader";
import { NavigationBar } from "../../components/NavigationBar";
import { WeekCalendar } from "../../components/WeekCalendar";
import { JobCard } from "../../components/JobCard";


export const ShiftsWithGigs: React.FC = () => {
  return (
    <View style={tw`flex-1 flex-col overflow-hidden flex-col items-center px-3 pt-10 pb-6 mx-auto w-full text-center bg-zinc-100 max-w-[480px]`}>
      <UserHeader 
      avatarUrl={require("../../assets/images/avatar.png")}
      username="Angela"
      />
      <View style={tw`flex-1 flex-row gap-4 justify-center w-full max-w-[480px]`}>
        <WeekCalendar />
        <View style={tw`flex-1 flex-col overflow-hidden w-full items-center mt-3 text-center `}>
        <JobCard 
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        company = "Transgate Construction"
        position = "General Labor"
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />
        <JobCard 
        date = "Tue, 10th Dec"
        time = "12:00 AM"
        location = "Calgary, AB - 8.2km"
        company = "Transgate Construction"
        position = "General Labor"
        hourlyRate = {17.50}
        hours = {8}
        totalAmount = {140.00}
        backgroundImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/5d39e68ac8e6f65c8f0802b579ba00d28ef135baad94913e4bf910ed7bc5a4b4?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />
        </View>
        
      </View>
      
      <NavigationBar />
    </View>
  );
};

