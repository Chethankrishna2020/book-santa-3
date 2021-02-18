import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from "../components/myHeader";
import * as firebase from 'firebase';
import db from "../config";

export default class BookRequestScreen extends Component{
  constructor(){
    super();
    this.state = {
      userId:firebase.auth().currentUser.email,
      bookName:"",
      reasonToRequest:"",

    }
  }
  render(){

    return(

        <View style = {styles.container}>
          
            <MyHeader title = "RequestBook"></MyHeader>
        </View>

    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
