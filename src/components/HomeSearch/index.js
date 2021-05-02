import React from 'react';
import { View, Text } from 'react-native';
//import { Feather } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeSearch = (props) => {
  return (
    <View>
      {/* Input Box*/}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>
          Where to?
        </Text>
        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={20} color={'#535353'} />
          <Text>
            Now
          </Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={"clockcircle"} size={16} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>
          Spin NightClub
        </Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer, {backgroundColor: '#218cff'}}>
          <Entypo name={"home"} size={16} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>
          Spin NightClub
        </Text>
      </View>
    </View>
  );
};

export default HomeSearch;