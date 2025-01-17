import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeNotVerified } from './app/(tabs)/HomeNotVerified';
import { Home } from './app/(tabs)/HomeBeingVerified';
import { ShiftDetails } from './app/(tabs)/ShiftDetails';
import ShiftConfirmationScreen from './app/(tabs)/ShiftConfirmationScreen';
import ShiftRequirements from './app/(tabs)/ShiftRequirements';
import { ShiftsNoGigs } from './app/(tabs)/ShiftsNoGigs';
import ShiftsNotAllowed from './app/(tabs)/ShiftsNotAllowed';
import { ShiftsWithGigs } from './app/(tabs)/ShiftsWithGigs';
import { UpComingShiftDetails } from './app/(tabs)/UpComingShiftDetails';
import { CompletedShiftDetails } from './app/(tabs)/CompletedShiftDetails';
import { UpComingShiftDetailsBegan } from './app/(tabs)/UpComingShiftDetailsBegan';
import { History } from './app/(tabs)/History';
import { HomeNoGigs } from './app/(tabs)/HomeNoGigs';
import { HomeWithGigs } from './app/(tabs)/HomeWithGigs';
import { Notifications } from './app/(tabs)/Notifications';
import { NotificationsEmpty } from './app/(tabs)/NotificationsEmpty';

export default function App() {
  return <NotificationsEmpty />
}


