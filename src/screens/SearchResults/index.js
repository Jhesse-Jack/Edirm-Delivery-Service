import React from 'react';
import { View, Dimensions } from 'react-native';
import HomeMap from "../../components/HomeMap/index";
import UberTypes from "../../components/HomeSearch/UberTypes/index";

const SearchResults = (props) => {
  return (
    <View style={{
      display: "flex",
      justifyContent: 'space-between',}}>
      <View style={{
        height:Dimensions.get('window').height - 300}}>
        <HomeMap />
      </View>
        <UberTypes />
    </View>
  );
};

export default SearchResults;