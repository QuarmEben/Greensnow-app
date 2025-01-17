import * as React from "react";
import { View, Text } from "react-native";
import { ShiftConfirmationDetailsProps } from "./types";
import tw from 'twrnc';

export const ShiftConfirmationDetails: React.FC<ShiftConfirmationDetailsProps> = ({ company, date, time }) => {
  return (
    <View style={tw`mt-10 text-xs tracking-tight text-center text-zinc-500`}>
      <Text style={tw`text-xs tracking-tight text-center text-zinc-500`}>
        {company} is expecting you to report on {date} at {time}.
      </Text>
    </View>
  );
}
