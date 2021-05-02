import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = (props) => {
  const {type} = props;
  const getImage = () => {
    if (type.type === 'Motor'){
      return require(`../../../assets/images/Motor.jpeg`);
    }
    if (type.type === 'Aboboyaa'){
      return require('../../../assets/images/Aboboyaa.jpeg');
    }
    return require('../../../assets/images/Delivery-Van.jpeg');
  }
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        style={styles.image} 
        source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} {' '}
          <Ionicons name={'person'} size={16} />
          3
        </Text>
        <Text style={styles.time}>
          8:03PM drop off
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>
          est. GHS {type.price}
        </Text>
      </View>
    </View>
  );
};

export default UberTypeRow;