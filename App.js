import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
  RefreshControl,
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
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await getBloodTestConfigFromServer();
    setRefreshing(false);
    //resets app state
    setTestname('');
    setResultValue('');
    setResult('');
  }, []);

  const submit = () => {
    const userInputRegrex = /[a-zA-Z0-9'(),-:/!]$/;
    if (userInputRegrex.test(testName)) {
      setResult(fetchDiagnosis(testName, resultValue));
    } else {
      ToastAndroid.showWithGravity(
        `Acceptable chars : 'A-Z', 'a-z', '0-9' and '(),-:/!'`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  };

  /**
   * Function to search the config file and return results to display
   * NOTE !
   * In order to be fogiving with user input,the strings are parsed to lowercase and remove "-" or ",".
   * Time complexity should also be improved
   * @param {*} name catagory nane
   * @param {*} value user inputed value
   * @returns
   */
  const fetchDiagnosis = (name, value) => {
    var result;
    var catagory;

    const data = config.bloodTestConfig;
    //Parse user input
    const nameArray = name
      .toLocaleLowerCase()
      .replace('-', ' ')
      .replace(',', ' ')
      .split(' ');

    //iterate over our config
    for (let i = 0; i < data.length; i++) {
      const objName = data[i].name.toLocaleLowerCase();
      //iterate over every user input string
      for (let j = 0; j < nameArray.length; j++) {
        const searchName = nameArray[j].toLocaleLowerCase();
        if (searchName === '') continue;
        if (objName.includes(searchName)) {
          catagory = data[i].name;
          result = value < data[i].threshold;
          //cholesterol alone isn't enough
          if (searchName !== 'cholesterol') {
            return {
              result: result,
              catagory: catagory,
            };
          }
        }
      }
    }
    if (result === undefined) {
      return 'Not Found';
    } else {
      //Edge case -> When we only type cholesterol alone,return the first result we had.
      return {
        result: result,
        catagory: catagory,
      };
    }
  };

  const getBloodTestConfigFromServer = async () => {
    try {
      const res = await fetch(
        'https://s3.amazonaws.com/s3.helloheart.home.assignment/bloodTestConfig.json',
      );
      const json = await res.json();
      setConfig(json);
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
    getBloodTestConfigFromServer();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator size="large" />
          <Text style={styles.text}>Loading...</Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
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
                <Result data={result} />
              </View>
            ) : (
              <View style={{flex: 3}}>
                <Text style={styles.text}>
                  Let's check your heart! insert values to start
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
    marginTop: 20,
  },
});
export default App;
