import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from 'twrnc';
import { ActionButton } from "../../components/ActionButton";
import { ShiftsHeader } from "../../components/ShiftsHeader";
import { RequiredItems } from "../../components/ItemsCheckList";

export default function ShiftsNotAllowed() {
  const buttons = [
    {
      text: "Continue",
      customStyle: "bg-stone-300 text-zinc-500",
      marginTop: "mt-72",
    },
    {
      text: "Cancel",
      customStyle: "border border-green-700 border-solid text-stone-900",
      marginTop: "mt-4",
    },
  ];

  return (
    
    <View style={tw`flex-1 overflow-hidden items-center flex-col px-3.5 py-10 mx-auto w-full bg-zinc-100 max-w-[480px]`}>
      <ShiftsHeader />

      <View style={tw`self-start text-2xl font-bold text-center text-stone-900`}>
        <Text style={tw`self-start text-2xl font-bold text-center text-stone-900`}>Not allowed</Text>
      </View>
      
      <View style={tw`mt-7 text-xs tracking-tight text-zinc-600`}>
        <Text style={tw`text-xs tracking-tight text-zinc-600`}>
          The following items are not allowed either on the work site or while
          or while working due safety concerns and regulations.
        </Text>
      </View>
      <View style={tw`mt-3 text-xs tracking-tight w-full text-zinc-600`}>
        <Text style={tw`text-xs tracking-tight text-zinc-600`}>
          If you do not meet these requirements, you may be sent home and will
          lose Rating and Rank.
        </Text>
      </View>
      <View style={tw`self-start mt-4 text-xs font-semibold tracking-tight leading-6 text-neutral-400`}>
        <Text style={tw`self-start text-xs font-semibold tracking-tight leading-6 text-neutral-400`}>Not Allowed</Text>
      </View>
      <View style={tw`h-[180px]`}>
      <RequiredItems
          requiredItems={[
            { imageUrl: require("../../assets/images/shoe.png"), title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: false, isSelectable: true},
  { imageUrl: require("../../assets/images/shoe.png"), title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: false, isSelectable: true},
  { imageUrl: require("../../assets/images/shoe.png"), title: "Worker Boot", subtitle: "More info", description: "Worker boots to protect the feet and to protect the feet and Worker boots to protect the feet and", isRequired: false, isSelectable: true}
          ]}
        />
        </View>
  
<View style = {tw`flex flex-col items-center w-full absolute bottom-0`}>
      <ActionButton 
        label="Continue"
        isEnabled = {false}
        onPress={()=>{}}
        className="bg-stone-300 text-zinc-500"
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
      
    </View>
    </View>
    
  );
}
