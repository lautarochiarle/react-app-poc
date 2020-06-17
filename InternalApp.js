import React, { Component } from "react";
import logo from "./src/logo.png";
import { StyleSheet, Text, View, Image} from 'react-native';
import Home from './screens/Home'

export class InternalApp extends Component {
  render() {
    if (this.props.authState === "signedIn") {
      return (
        <View>
          <Image source={logo}  alt="logo" style={ {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  }}/>
          <Text>Internal Application behind Login</Text>
          <View style={styles.container}>
            <Home></Home>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebeb',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });