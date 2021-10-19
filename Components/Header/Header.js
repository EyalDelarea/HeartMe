import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../../static/heartLogo.png';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.logoText}>HeartMe</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
