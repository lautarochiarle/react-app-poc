import React from 'react';
import { Authenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";
import AuthWrapper from "./AuthWrapper";
import { withAuthenticator } from 'aws-amplify-react-native';

import { StyleSheet, Text, View } from 'react-native';
import awsConfig from './src/aws-exports';


Amplify.configure(awsConfig);


function App() {
  return (
    <View >
      <View >
        <Authenticator hideDefault={true} amplifyConfig={awsConfig}>
          <AuthWrapper />
        </Authenticator>
      </View>
    </View>
  );
}

//export default withAuthenticator(App);
export default App;



