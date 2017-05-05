import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Picker, Item, Platform
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddPost extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={{marginBottom:30}} onPress={Actions.home}>
          <Icon style={styles.icon} name="ios-close" />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Add Rooms for Rent</Text>
          <Text style={styles.subTitle}>Add your room,office or flat for rent in Roomie. Roomie is completely free and doesn't take any commisions from client or customer.</Text>
        </View>
        <View style={styles.formSection}>
          <View style={styles.section}>
            <Label>Room type</Label>
            <FormItem />
          </View>
        </View>
      </View>
    )
  }
}

const FormItem = () => (
  <View style={styles.formItem}>
    <View style={{flex:3}}>
      <Text style={styles.itemTitle}>Office Space</Text>
      <Text style={styles.itemSubtitle}>Have a place for company.</Text>
    </View>
    <View style={{flex:1}}>

    </View>
  </View>
)

const Label = (props) => (
  <Text style={styles.label}>{props.children}</Text>
)

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    paddingBottom:50,
    paddingHorizontal:20
  },
  title: {
    fontWeight:'bold',
    fontSize:30,
    color: '#484848',
    letterSpacing: 1
  },
  subTitle: {
    color: '#797979',
    marginTop:5,
    fontSize:17,
    fontWeight: '100',
    letterSpacing: 1,
  },
  icon: {
    fontSize:35,
    paddingLeft:15,
    marginLeft:-15,
    width:45
  },
  label: {
    fontSize:20,
    paddingVertical:15,
    letterSpacing:0.75,
    color: '#000',
    fontWeight:'400',

  },
  formSection: {
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  formItem: {
    width:'100%',
    flexDirection: 'row',
  },
  itemTitle: {
    fontSize:18,
    color: '#000',
    paddingTop:10,
    paddingBottom:7,
    fontWeight:'200',
    fontFamily: (Platform.OS === 'android')? 'sans-serif-light':'ArialHebrew-Light',
  },
  itemSubtitle: {
    fontFamily: (Platform.OS === 'android')? 'sans-serif-light':null,
    fontSize:15,
    fontWeight:'100',
    color:"#333"
  }
})
