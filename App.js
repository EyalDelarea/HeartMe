import React, {useEffect} from 'react';
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
import Result from './Components/Result/Result';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [result, setResult] = React.useState();
  const [testName, setTestname] = React.useState('');
  const [resultValue, setResultValue] = React.useState('');
  const [config, setConfig] = React.useState({});

  const submit = () => {
    const userInputRegrex = /^[a-zA-Z0-9'(),-:/!]$/;
    if (userInputRegrex.test(testName)) {
      setResult({catagory: 'HDL Postive', result: true});
    } else {
      ToastAndroid.showWithGravity(
        `Invalid Chars in the testname`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };
  const getBloodTestConfig = async () => {
    try {
      const res = await fetch(
        'https://s3.amazonaws.com/s3.helloheart.home.assignment/bloodTestConfig.json',
      );

      const json = await res.json();
      //Converts config into hashmap
      const map = new Map();
      json.bloodTestConfig.map(el => {
        map.set(el.name, el.threshold);
      });
      setConfig(map);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      ToastAndroid.showWithGravity(
        `Error trying to fetch blood tests config`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };
  useEffect(() => {
    setResult(false);
    setLoading(true);
    getBloodTestConfig();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator size="large" />
          <Text style={styles.text}>Loading...</Text>
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
              onSubmit={submit}
            />
            {result ? (
              <View style={{flex: 3}}>
                {/* To break into different componenet */}
                <Result data={result} />
              </View>
            ) : (
              <View style={{flex: 3}}>
                <Text style={styles.text}>
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
  text: {
    textAlign: 'center',
    marginTop:20
  },
});
export default App;
