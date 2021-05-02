import React, {useState, useEffect} from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = (props) => {

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.warn('useEffect is deprecated');
    if (originPlace && destinationPlace){
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace])

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <GooglePlacesAutocomplete 
            placeholder="From? "
            onPress={
              (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
                setOriginPlace({data, details});
                console.log(data, details);
              }}
              styles = {{
                textInput: styles.textInput,
              }}
              fetchDetails
              query={{
                key: 'AIzaSyAJ-Og8qLFnj98gxc8q3fJfpdJS3Tj3L6M',
                language: 'en',
                }} />

          <GooglePlacesAutocomplete 
            placeholder="Where to? "
            onPress={
              (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
                setDestinationPlace({data, details});
                console.log(data, details);
              }}
              styles = {{
                textInput: styles.textInput,
              }}
              fetchDetails
              query={{
                key: 'AIzaSyAJ-Og8qLFnj98gxc8q3fJfpdJS3Tj3L6M',
                language: 'en',
                }} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;