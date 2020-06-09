import React, { Component } from "react";
import { Auth } from "aws-amplify";

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { SignIn } from "aws-amplify-react-native/dist/Auth";

export class CustomSignIn extends Component {

  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];

    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    this.signIn = this.signIn.bind(this);

    this.state = {
      email: '',
      password: ''
   }
  }  
  
 handleEmail = (text) => {
    alert(text);
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    alert(text);
    this.setState({ password: text })
 }

 signIn = async (evt) => {
  evt.preventDefault(); 
  this.login(this.state.email, this.state.password)
}


 login = async (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)

    try {
      await Auth.signIn(email, pass);
      this.props.onStateChange("signedIn", {});
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        this.props.updateUsername(email);
        await Auth.resendSignUp(email);
        this.props.onStateChange("confirmSignUp", {});
      } else if (err.code === "NotAuthorizedException") {
        // The error happens when the incorrect password is provided
        this.setState({ error: "Login failed." });
      } else if (err.code === "UserNotFoundException") {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
        this.setState({ error: "Login failed." });
      } else {
        this.setState({ error: "An error has occurred." });
        console.error(err);
      }
    }    
 }
 render() {
    return (
       <View style = {styles.container}>
              {this._validAuthStates.includes(this.props.authState) && (
        <View style={styles.subcontainer}>
       <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Email"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             onChangeText = {this.handleEmail}/>
          
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Password"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             onChangeText = {this.handlePassword}/>
          
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {this.signIn}>
             <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
          </View>
       )}
       </View>

          

    )
 }
}
export default CustomSignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    paddingTop: 123,
    borderWidth: 1,
    borderColor: 'blue'
 },
 subcontainer:{   
   borderWidth: 1,
   borderColor: 'red',
   paddingTop: 123,
 },
 input: {
  paddingBottom:0,
  padding: 0,
    margin: 0,
    height: 80,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 }
})