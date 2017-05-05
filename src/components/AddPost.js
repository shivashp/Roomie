import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Picker, Item, Platform, ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddPost extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={{marginBottom:10}} onPress={Actions.home}>
          <Icon style={styles.icon} name="ios-close" />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop:20}}>
            <Text style={styles.title}>Add Rooms for Rent</Text>
            <Text style={styles.subTitle}>Add your room,office or flat for rent in Roomie. Roomie is completely free and doesn't take any commisions from client or customer.</Text>
          </View>
          <View style={styles.formSection}>
            <View style={styles.section}>
              <Label>Rent type</Label>
              <RentItem name="Single Room"/>
              <RentItem name="Office Space"/>
              <RentItem name="Apartment"/>
            </View>
            <View style={styles.section}>
              <Label>Location</Label>
              <RentItem name="Kathmandu" desc="Inside Kathandu Valley"/>
              <RentItem name="Butwal" desc="Including Bhairahawa, Yogikuti"/>
              <RentItem name="Pokhara" desc="Places inside the valley"/>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const RentItem = (props) => (
  <TouchableOpacity style={styles.RentItem}>
    <View style={{flex:3}}>
      <Text style={styles.itemTitle}>{props.name}</Text>
      <Text style={styles.itemSubtitle}>{props.desc}</Text>
    </View>
    <View style={{flex:1}}>
    </View>
  </TouchableOpacity>
)

RentItem.defaultProps = {
  desc: 'Have a place for company.'
}

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
    marginTop:20,
    marginBottom:30
  },
  section: {
    borderBottomWidth:1,
    borderColor: "#ccc",
    paddingVertical:20,
  },
  RentItem: {
    width:'100%',
    flexDirection: 'row',
    marginBottom:25
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
