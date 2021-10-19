import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import happy from '../../static/happy.png'
import sad from '../../static/sad.png'
const Result = ({data}) => {
  return (
    <View
    style={
      styles.container
    }
    >
      <Text>{data.catagory}</Text>
     {data.result ? 
     <Image
     style={styles.image}
     source={happy}/>
     :
     <Image
     style={styles.image}
     source={sad}/>
     }
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width: 150,
    height: 150
  }
});
