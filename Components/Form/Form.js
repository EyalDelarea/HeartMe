import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const Form = ({setResultValue, setTestname, resultValue, testName}) => {
  return (
    <View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Am I Okay?
        </Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={value => setTestname(value)}
          value={testName}
          placeholder={'Test Name'}
        />

        <TextInput
          style={styles.input}
          onChangeText={value => setResultValue(value)}
          value={resultValue}
          placeholder={'Result Value'}
        />

        <TouchableOpacity
          title="Submit"
          onPress={() => {
            ToastAndroid.showWithGravity(
              `${testName},: ${resultValue}`,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          }}
          style={{
            alignItems: 'center',
            backgroundColor: '#ED4845',
            borderRadius: 100,
            width: 100,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 30,
  },
});
