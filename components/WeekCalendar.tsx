import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { WeekDayProps } from './types';
import { DayProps } from './types';
import tw from "twrnc";

const weekData: WeekDayProps = {
  days: [
    { day: 'M', date: '9', color: 'rose-500' },
    { day: 'T', date: '10', color: 'green-700' },
    { day: 'W', date: '11' },
    { day: 'T', date: '12' },
    { day: 'F', date: '13' },
    { day: 'S', date: '14' },
    { day: 'S', date: '15' },
    { day: 'M', date: '16'},
    { day: 'T', date: '17'},
    { day: 'W', date: '18' },
    { day: 'T', date: '19' },
    { day: 'F', date: '20' },
    { day: 'S', date: '21' },
    { day: 'S', date: '22' }
  ]
};

export const WeekCalendar: React.FC = () => {
  return (
    <View style={tw`flex flex-col text-base font-semibold tracking-tight leading-loose text-center whitespace-nowrap rounded-xl overflow-hidden h-[457px] max-w-[35px] text-neutral-400`}>
      <ScrollView>
      <View style={tw`flex flex-col justify-center items-center px-2 py-6 w-full rounded-xl bg-stone-900`}>
        <View style={tw`flex flex-col justify-center items-center`}>
          {weekData.days.map((day, index) => (
            <DayItem
              key={index}
              day={day.day}
              date={day.date}
              color={day.color}
            />
          ))}
        </View>
      </View>
      </ScrollView>
    </View>
  );
};





export const DayItem: React.FC<DayProps> = ({ day, date, color }) => {
  return (
    <View style={tw`flex flex-col mt-2 w-full`}>
      <View>
        <Text style={tw`text-base font-semibold tracking-tight text-center whitespace-nowrap rounded-none text-neutral-400 ${color ? `text-${color}` : ''}`}>{day}</Text>
      </View>
      <View style={tw`self-center`}>
        <Text style={tw`text-base font-semibold tracking-tight text-center whitespace-nowrap rounded-none text-neutral-400 ${color ? `text-${color}` : ''}`}>{date}</Text>
      </View>
    </View>
  );
};