import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  ActivityIndicator,
  Button,
  Linking,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Credit from './Components/Credit';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState(false);
  const [testName, setTestname] = React.useState('');
  const [resultValue, setResultValue] = React.useState('');

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator size="large" />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 15,
            }}>
            Loading...
          </Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <Header />
            <Form
              resultValue={resultValue}
              setResultValue={setResultValue}
              testName={testName}
              setTestname={setTestname}
            />
            {result ? (
              <View style={{flex: 3}}>
                {/* To break into different componenet */}
                <Text>Result</Text>
              </View>
            ) : (
              <View style={{flex: 3}}>
                <Text style={{textAlign: 'center'}}>
                  Go Ahead, Press the submit button!
                </Text>
              </View>
            )}
            <Credit />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});
export default App;
