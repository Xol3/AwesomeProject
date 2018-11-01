import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import FetchLocation from "./components/FetchLocation";

export default class App extends React.Component {
  getUserLocationHandler = () => {
    console.log("button is pressed");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Ohh yeah mr pancho</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
