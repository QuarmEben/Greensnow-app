import { useState } from 'react';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Modal, ScrollView } from 'react-native';

import tw from "twrnc";
import { ShiftsHeader } from '../../components/ShiftsHeader';
import { DateTimeDisplay } from '../../components/DateTimeDisplay';
import { ShiftDetailsJobCard } from '../../components/ShiftDetailsJobCard';
import { MetricDisplay } from '../../components/MetricsDisplay';
import { TotalEarnings } from '../../components/TotalEarning';
import { LocationDisplay } from '../../components/LocationDisplay';
import { Details } from '../../components/ShiftDetailsDescription'; 
import { ButtonProps, RatingIndicatorProps } from '../../components/types';
import { ActionButton } from '../../components/ActionButton';

export const UpComingShiftDetails: React.FC = () => {

  const [isCancelShiftModal, setisCancelShiftModal] = useState(false);
  const [isBeginShiftModal, setisBeginShiftModal] = useState(false);
  const [isAwaitingConfirmationModal, setisAwaitingConfirmationModal] = useState(false);

  const ratingData = [
    { icon: require("../../assets/images/star_red_icon.png"), value: "-10" },
    { icon: require("../../assets/images/rating_red_icon.png"), value: "-35" }
  ];


  return (
    <View style={tw`flex-1 overflow-hidden flex-col px-3.5 pt-4 py-10 pb-9 mx-auto w-full bg-zinc-100 max-w-[480px]`}>
      <ShiftsHeader />
      <View style={tw`flex flex-row gap-10 self-center text-stone-900`}>

      
        <View style={tw`flex flex-col w-full items-start`}>
         
          <View style={tw`self-stretch mt-2.5 text-2xl font-bold`}>
            <Text style={tw`self-stretch mt-2.5 text-2xl font-bold text-start text-stone-900`}>Shift Details</Text>
          </View>
          
        </View>

      </View>

      <ScrollView>

      <DateTimeDisplay 
      date='Tue, 10th Dec'
      time='12:00 AM'
      />
      
    

      <View style={tw`shrink-0 self-center mt-1.5 max-w-full h-px border border-solid border-stone-300 w-[350px]`} />

      <ShiftDetailsJobCard 
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e22974a8cab7de7ade9ef3581d4d7d8c9af88c24f37539b7a88183f9fa7ea5?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        jobTitle="General Labor"
        companyName="Transgate Construction"
        />


<MetricDisplay 
        leftValue="$17.50"
        leftLabel="Hourly rate"
        rightValue="8 HRS"
        rightLabel="Duration"
        />
        

        <TotalEarnings  totalEarnings={140}/>

        <LocationDisplay
          address="1180 Barlow Trail NE, Calgary, AB T3J, Canada"
          mapImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bd168c1c64b133f2d4d9e3c84c1312dffacfbdccf2b8317ffcd8ad231338fdbc?placeholderIfAbsent=true&apiKey=40e5f984174e460295df60a5034c4fb5"
        />

        <MetricDisplay
          leftValue="12:00AM"
          leftLabel="start time"
          rightValue="8:00AM"
          rightLabel="End Time"
        />


        <Details description="Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes. Discover millions of gigs and get in touch with gig hirers as seamless as it comes."/>

      

      <TouchableOpacity 
      style={tw`self-center px-16 py-4 mt-10 w-full text-xl font-semibold tracking-tight rounded-xl bg-stone-300 max-w-[327px]`}
      onPress={() => setisBeginShiftModal(true) }
      >
        <Text style={tw`text-zinc-500 self-center text-xl font-semibold tracking-tight`}>Begin Shift</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={tw`self-center px-16 py-4 mt-4 w-full text-xl font-semibold tracking-tight rounded-xl bg-rose-600 max-w-[327px]`}
      onPress={() => setisCancelShiftModal(true) }
      >
        <Text style={tw`text-white self-center text-xl font-semibold tracking-tight`}>Cancel</Text>
      </TouchableOpacity>
      </ScrollView>

      {/* Modalcomponent */}
      <Modal 
        visible={isCancelShiftModal} 
        onRequestClose={() => setisCancelShiftModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-30`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-full bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setisCancelShiftModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={require("../../assets/images/close_icon.png")}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Are you sure you{'\n'}want to cancel?</Text>
            </View>
            
            <View style={tw`text-sm tracking-tight text-center`}>
              <Text style={tw`mt-5 text-sm tracking-tight text-center text-zinc-600`}>5 hours 13 minutes for shift to start.</Text>
            </View>
            
            <View style={tw`self-start mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
                Your assurance and ratings would drop if you cancel now. 
                Severe consequences if you do not show up
              </Text>
            </View>
            
            <View style={tw`flex flex-row gap-1.5 items-start mt-3.5 text-xs tracking-tight text-center text-rose-600 whitespace-nowrap w-[110px]`}>
              {ratingData.map((rating, index) => (
                <RatingIndicator
                  key={index}
                  icon={rating.icon}
                  value={rating.value}
                />
              ))}
            </View>
            
            <View style={tw`mt-6 text-xs tracking-tight text-center`}>
              <Text style={tw`mt-6 text-xs tracking-tight text-center`}>You will not be able to take this shift again</Text>
            </View>
            
            <ActionButton 
              label="Cancel"
              onPress={() => setisCancelShiftModal(false)}
              isEnabled={true}
              className='px-16 py-2.5 mt-5 max-w-full text-xl font-semibold tracking-tight text-white whitespace-nowrap bg-rose-600 rounded-md w-[193px]'
            />
          </View>
      </View>
    </Modal>

{/* Begin shift modal */}
    <Modal 
        visible={isBeginShiftModal} 
        onRequestClose={() => setisBeginShiftModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-30`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-full bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setisBeginShiftModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={require("../../assets/images/close_icon.png")}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Make sure you at the job site</Text>
            </View>
            
            <View style={tw`text-sm tracking-tight text-center`}>
              <Text style={tw`mt-5 text-sm tracking-tight text-center text-zinc-600`}>8 hours 00 minutes for shift to end.</Text>
            </View>
            
            <View style={tw`self-start mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
              Once you begin, we will await confirmation from your employer to verify that you are on site and ready to work.
              </Text>
            </View>
            
            
            <View style={tw`mt-6 text-xs tracking-tight text-center`}>
              <Text style={tw`mt-6 text-xs tracking-tight text-center`}>Shift countdown will begin after employer confirms shift start.</Text>
            </View>
            
            <ActionButton 
              label="Begin"
              onPress={() => { 
                setisBeginShiftModal(false);
                setisAwaitingConfirmationModal(true);
              }}
              isEnabled={true}
              className='px-16 py-2.5 mt-7 max-w-full rounded-md w-[193px]'
            />
          </View>
      </View>
    </Modal>

    {/* awating shift confirmation modal ----------------------------------------------------------------------------*/}
    <Modal 
        visible={isAwaitingConfirmationModal} 
        onRequestClose={() => setisAwaitingConfirmationModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-50`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-full bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setisAwaitingConfirmationModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={require("../../assets/images/close_icon.png")}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Awaiting Confirmation To Begin Your Shift</Text>
            </View>
            
            <View style={tw`text-sm tracking-tight text-center`}>
              <Text style={tw`mt-5 text-sm tracking-tight text-center text-zinc-600`}>8 hours 00 minutes for shift to end.</Text>
            </View>
            
            
            <View style={tw`mt-6 text-xs tracking-tight text-center`}>
              <Text style={tw`mt-6 text-xs tracking-tight text-center`}>Shift countdown will begin after employer confirms shift start.</Text>
            </View>
      
          </View>
      </View>
    </Modal>
    </View>
  );
};


const RatingIndicator: React.FC<RatingIndicatorProps> = ({ icon, value }) => {
  return (
    <View style={tw`flex flex-row flex-1 shrink gap-0.5 items-center basis-0`}>
      <Image
        source={ icon }
        style={tw`object-contain shrink-0 self-stretch my-auto w-5 aspect-square`}
        accessibilityLabel={`Rating indicator showing ${value}`}
      />
      <View style={tw`self-stretch my-auto`}>
        <Text style={tw`text-xs tracking-tight text-center text-rose-600 whitespace-nowrap`}>{value}</Text>
      </View>
    </View>
  );
};

