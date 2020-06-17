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
        <Authenticator hideDefault={true} amplifyConfig={awsConfig}>
          <AuthWrapper />
        </Authenticator>
  );
}

//export default withAuthenticator(App);
export default App;



