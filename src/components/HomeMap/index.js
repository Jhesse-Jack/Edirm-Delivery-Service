import React from 'react';
import { View, Text } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = (props) => {
  return (
    <View style={{ 
      height: '100%', 
      backgroundColor: "#a0abff", 
      justifyContent: 'center',
      alignItems: 'center', 
    }}>
    <MapView
    style={{
      height: '100%',
      width: '100%',
    }}
    provider={PROVIDER_GOOGLE} 
      initialRegion={{
        latitude: 5.550000, //37.78825, //
        longitude: -0.020000, //-122.4324, //
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>
     </View>
  );
};

export default HomeMap;