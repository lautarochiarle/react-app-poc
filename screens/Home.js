import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Card} from 'react-native-paper'
import {Auth} from 'aws-amplify';

import awsConfig from '../src/aws-exports';


function Home(){
    return (
        <Card style={styles.mycard}>
            <Text>Hello from home</Text>
            <Button title="SignOut" onPress={Auth.signOut} />
        </Card>
        
    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        padding:5
    }
})
export default Home