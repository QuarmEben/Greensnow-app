import * as React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { PenaltyCard } from "../../components/PenaltyCard";
import { ActionButton } from "../../components/ActionButton";
import tw from 'twrnc';
import { ShiftsHeader } from "../../components/ShiftsHeader";
import { RequiredItems } from "../../components/ItemsCheckList";

const penaltyData = {
  title: "Showing up unprepared",
  penalties: [
    {
      icon: require("../../assets/images/star.png"),
      text: "-40 Rating",
    },
    {
      icon: require("../../assets/images/rating.png"),
      text: "-35 Rank",
    },
  ],
};

export default function ShiftRequirements() {
  return (
    
    <View style = {tw`flex-1 overflow-hidden flex-col px-3.5 py-10 mx-auto w-full bg-zinc-100 max-w-[480px]`}>
      
      <ShiftsHeader />
      
      <View style = {tw`self-start text-2xl font-bold text-center text-stone-900`}>
        <Text  style = {tw`self-start text-2xl font-bold text-center text-stone-900`}>Requirements</Text>
      </View>
      <ScrollView>
      <View style = {tw`mt-7 text-xs tracking-tight text-zinc-600`}>
        <Text style = {tw`mt-7 text-xs tracking-tight text-zinc-600`}>
          Failure to bring the required items or to meet the requirements will
          result in you being <Text style={tw`font-bold`}>sent home</Text>. This will lead to the loss of Rank and
          Rating points and may result in the <Text style={tw`font-bold`}>suspension</Text> or <Text style={tw`font-bold`}>deactivation</Text> of your
          account.
        </Text>
      </View>

      <PenaltyCard
        title={penaltyData.title}
        penalties={penaltyData.penalties}
      />

      <View style = {tw`mt-12 text-sm font-semibold tracking-tight text-zinc-600`}>
        <Text style = {tw`text-sm font-semibold tracking-tight text-zinc-600`}>
          Confirm you have the required gear by tapping the cards below:
        </Text>
      </View>

      <View style = {tw`self-start mt-3.5 text-xs font-semibold tracking-tight leading-6 text-neutral-400`}>
        <Text style={tw`flex text-start text-zinc-500 w-[83px]`}>Required</Text>
      </View>

      <RequiredItems
          requiredItems={[
            { imageUrl: require("../../assets/images/shoe.png"), title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: true},
  { imageUrl: require("../../assets/images/shoe.png"), title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: true},
  { imageUrl: require("../../assets/images/shoe.png"), title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: true, isSelectable: true}
          ]}
        />
        
      
      <ActionButton 
        label="Continue"
        isEnabled={false}
        onPress={()=>{}}
        className="mt-16"
      />
      <View style = {tw`flex flex-col self-center items-center w-[300px]`}>
      <TouchableOpacity 
      onPress={()=>{}}
      style={tw`self-center px-16 py-4 mt-5 w-full rounded-xl max-w-[327px] border border-green-700`}
      accessibilityRole="button"
    >
      <Text style={tw`text-xl font-semibold tracking-tight text-center`}>
        Cancel
      </Text>
    </TouchableOpacity>
    </View>
      </ScrollView>
    </View>
    
  );
}
