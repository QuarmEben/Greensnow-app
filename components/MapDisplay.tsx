import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import tw from "twrnc";

export default function MapDisplay() {
  return (
    <View>
    <View style={tw`flex`}>
      <MapView style={tw`w-full h-[200px]`}
       showsUserLocation
       showsMyLocationButton
       />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
