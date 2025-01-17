import * as React from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
// import { ConfirmationMessage } from "./ConfirmationMessage";
import { ShiftConfirmationDetails } from "../../components/ShiftConfirmationDetails";
import { CountdownTimer } from "../../components/CountdownTimer";
// import { ConfirmButton } from "./ConfirmButton";
import tw from 'twrnc';
import { ActionButton } from "../../components/ActionButton";

export default function ShiftConfirmationScreen() {
  return (
    <View style={tw`flex overflow-hidden flex-col items-center px-8 pt-44 pb-20 mx-auto w-full bg-zinc-100 max-w-[480px] text-stone-900`}>
      <Image
        accessible={true}
        accessibilityLabel="Shift confirmation illustration"
        source={require("../../assets/images/completed.png")}
        style={tw`object-contain w-full aspect-[1.36]`}
      />
      <View style={tw`mt-16 text-2xl font-extrabold tracking-tighter leading-none text-center`}>
      <Text style={tw`text-2xl font-extrabold tracking-tighter leading-none text-center`}>You took the shift!</Text>
    </View>
      <ShiftConfirmationDetails
        company="Transgate Construction"
        date="Wednesday, 15th December"
        time="12:00am"
      />
      <CountdownTimer hours={12} minutes={17} />
      <ActionButton 
      onPress={() => alert("Button tapped")}
      label="Confirm" 
      isEnabled={true}
      className="self-stretch px-16 py-4 whitespace-nowrap"
      />
    </View>
  );
}
