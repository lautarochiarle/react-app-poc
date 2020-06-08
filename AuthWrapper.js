import React, { Component } from "react";
import { InternalApp } from "./InternalApp";
import { CustomSignIn } from "./SignIn";

import { StyleSheet, Text, View } from 'react-native';

class AuthWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.updateUsername = this.updateUsername.bind(this);
  }

  updateUsername(newUsername) {
    this.setState({ username: newUsername });
  }

  render() {
    return (
      <View >
        <CustomSignIn
          authState={this.props.authState}
          updateUsername={this.updateUsername}
          onStateChange={this.props.onStateChange}
        />
        <InternalApp authState={this.props.authState} onStateChange={this.props.onStateChange} />
      </View>
    );
  }
}

export default AuthWrapper;