import { useState } from 'react';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';

import tw from "twrnc";
import { ShiftsHeader } from '../../components/ShiftsHeader';
import { DateTimeDisplay } from '../../components/DateTimeDisplay';
import { ShiftDetailsJobCard } from '../../components/ShiftDetailsJobCard';
import { MetricDisplay } from '../../components/MetricsDisplay';
import { TotalEarnings } from '../../components/TotalEarning';
import { LocationDisplay } from '../../components/LocationDisplay';
import { Details } from '../../components/ShiftDetailsDescription';
import { CountdownTimer } from '../../components/CountdownTimer';
import { ActionButton } from '../../components/ActionButton';

export const UpComingShiftDetailsBegan: React.FC = () => {

  const [isShiftDurationUpModal, setIsShiftDurationUpModal] = useState(false);
  const [isAwaitingCompletionModal, setisAwaitingCompletionModal] = useState(false);
  const [isShiftCompletionVerifiedModal, setisShiftCompletionVerifiedModal] = useState(false);

  return (
    <View style={tw`flex-1 overflow-hidden flex-col px-3.5 pt-4 py-10 pb-9 mx-auto w-full bg-zinc-100 max-w-[480px]`}>
      <ShiftsHeader />
      <View style={tw`flex gap-10 self-center w-full`}>

      
        <View style={tw`flex flex-col items-start`}>
         
          <View style={tw`self-stretch mt-2.5`}>
            <Text style={tw`self-stretch mt-2.5 text-2xl font-bold text-start text-stone-900`}>Shift Details</Text>
          </View>
          
        </View>

      </View>

      <ScrollView>

      <DateTimeDisplay 
      date="Tue, 10th Dec"
      time="12:00 AM"
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

      <CountdownTimer 
      hours={0}
      minutes={0}
      />
        

        {/* <View style={tw`self-center px-16 py-4 mt-9 w-full rounded-xl bg-stone-300 max-w-[327px]`}>
          <Text style={tw`text-xl text-center font-semibold tracking-tight bg-stone-300 text-zinc-500`}>Complete Shift</Text>
        </View> */}

        <ActionButton 
        label='Complete Shift'
        onPress={() => setIsShiftDurationUpModal(true)}
        isEnabled={true}
        className=''
        />
      

      </ScrollView>


{/* Shift duration up modal */}
      <Modal 
        visible={isShiftDurationUpModal} 
        onRequestClose={() => setIsShiftDurationUpModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-30`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-full bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setIsShiftDurationUpModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={require("../../assets/images/close_icon.png")}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Your Shift Duration Is Up</Text>
            </View>
            
            <View style={tw`text-sm tracking-tight text-center`}>
              <Text style={tw`mt-5 text-sm tracking-tight text-center text-zinc-600`}>0 hours 00 minutes for shift to end.</Text>
            </View>
            
            <View style={tw`self-start mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
              Once you complete, we will await confirmation from your employer to verify that you are done with your work.
              </Text>
            </View>
            
            
            <View style={tw`mt-6 text-xs tracking-tight text-center`}>
              <Text style={tw`mt-6 text-xs tracking-tight text-center`}>Shift will be counted as completed once the employer verifies this.</Text>
            </View>
            
            <ActionButton 
              label="Complete"
              isEnabled={true}
              onPress={() => {
                setIsShiftDurationUpModal(false);
                setisAwaitingCompletionModal(true);
              }
              }
              className='py-2.5 mt-7 max-w-full rounded-md'
            />
          </View>
      </View>
    </Modal>

    {/* Shift duration up Awaiting Confirmation modal -----------------------------------------------*/}
    <Modal 
        visible={isAwaitingCompletionModal} 
        onRequestClose={() => setisAwaitingCompletionModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-60`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-full bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setisAwaitingCompletionModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={require("../../assets/images/close_icon.png")}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Awaiting Confirmation To Complete Your Shift</Text>
            </View>
            
            <View style={tw`text-sm tracking-tight text-center`}>
              <Text style={tw`mt-5 text-sm tracking-tight text-center text-zinc-600`}>0 hours 00 minutes for shift to end.</Text>
            </View>
            
            <View style={tw`self-start my-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
              Shift will be counted as completed once the employer verifies this.
              </Text>
            </View>
            
            
          </View>
      </View>
    </Modal>


    {/* Shift Completion Verified modal -----------------------------------------------*/}
    <Modal 
        visible={isShiftCompletionVerifiedModal} 
        onRequestClose={() => setisShiftCompletionVerifiedModal(false)}
        animationType='fade'
        presentationStyle='pageSheet'
        transparent={true}
      >
        <View style={tw`flex flex-col self-center rounded-none max-w-[322px] mt-60`}>
          <View style={tw`flex flex-col items-center px-8 py-5 w-full bg-white rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}>
          <TouchableOpacity 
      onPress={() => setisShiftCompletionVerifiedModal(false) }
      style={tw`self-end w-3.5 aspect-[1.08]`}
      >
            <Image
              source={require("../../assets/images/close_icon.png")}
              style={tw`object-contain self-end w-3.5 aspect-[1.08]`}
              accessibilityLabel="Close modal"
            />
            </TouchableOpacity>
            
            <View style={tw`mt-16 text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>
              <Text style={tw`text-xl font-extrabold tracking-tight leading-6 text-zinc-800`}>Shift Completion Verified</Text>
            </View>
            
            <View style={tw`self-start mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
              Employer has verified that you have completed your shift.
              </Text>
            </View>
            
            
            <View style={tw`self-center mt-7 text-sm tracking-tight text-center`}>
              <Text style={tw`text-sm tracking-tight text-center text-zinc-600`}>
                Good job!
              </Text>
            </View>


            <ActionButton 
              label="Continue"
              isEnabled={true}
              onPress={() => 
                setisShiftCompletionVerifiedModal(false)
              
              }
              className='py-2.5 mt-7 max-w-full rounded-md'
            />
            
          </View>
      </View>
    </Modal>



    </View>
  );
};