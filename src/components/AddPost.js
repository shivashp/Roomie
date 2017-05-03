import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';

export default class AddPost extends Component {
  render() {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', paddingHorizontal:65}}>
        <Text style={{marginTop: -40, fontSize:20, fontWeight: 'bold', color:'#666', marginBottom:20}}>Add Room for Rent</Text>
        <Text style={{textAlign: 'center'}}>This page is under construction. This page will allow users to upload their own property for Rent</Text>
      </View>
    )
  }
}
