import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const Form = ({
  setResultValue,
  setTestname,
  resultValue,
  testName,
  onSubmit,
}) => {
  return (
    <View style={styles.contianer}>
      <View style={{flex: 1}}>
        <Text style={styles.header}>Am I Okay?</Text>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
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
          keyboardType={'numeric'}
          placeholder={'Result Value'}
        />

        <TouchableOpacity
          title="Submit"
          onPress={() => {
            onSubmit();
          }}
          style={styles.submitButton}>
          <Text
            style={{fontWeight:'bold'}}>
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
    textAlign:'center'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  contianer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#ED4845',
    borderRadius: 100,
    width: 100,
    padding: 10,
    alignItems:'center'
  },
});
