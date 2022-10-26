import React, {StyleSheet, Text, View} from 'react-native';
import {getBuildNumber, getVersion} from 'react-native-device-info';

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>POC CD RN</Text>
      <Text style={styles.description}>
        Proof of concept for continuous deployment of a react native mobile app
      </Text>
      <Text style={styles.version}>
        Version {getVersion()} ({getBuildNumber()})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  description: {
    marginBottom: 24,
  },
  version: {},
});

export default App;
