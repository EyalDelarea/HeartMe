import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import happy from '../../static/happy.png';
import sad from '../../static/sad.png';
import notFound from '../../static/notFound.png';
const Result = ({data}) => {
  return (
    <View>
      {data === 'Not Found' ? (
        <View style={styles.container}>
          <Text>Unknown Catagory,Perhaps you mispelld?</Text>
          <Image style={styles.image} source={notFound} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>{data.catagory}</Text>
          {data.result ? (
            <Image style={styles.image} source={happy} />
          ) : (
            <Image style={styles.image} source={sad} />
          )}
        </View>
      )}
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});
