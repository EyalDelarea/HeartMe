import {Linking, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const Credit = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://github.com/EyalDelarea/HeartMe');
        }}
        style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Created By: Eyal Delarea
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Credit;

