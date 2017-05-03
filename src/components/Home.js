import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { SearchBar, SingleProperty } from '../widgets'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import All from './All';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <SearchBar />
          <ScrollableTabView style={styles.tab}
            tabBarTextStyle={{fontSize:13, fontWeight: '600'}}
            tabBarUnderlineStyle ={{backgroundColor: '#3B7CEC', height:2, position: 'absolute', bottom: -1}}
            tabBarActiveTextColor={'#3B7CEC'}
            tabBarInactiveTextColor={'#9DABC0'}>
            <All tabLabel="All" />
            <Sample tabLabel="Room" />
            <Sample tabLabel="Office" />
            <SingleProperty tabLabel="Flat" />
          </ScrollableTabView>
      </View>
    )
  }
}

const Sample = () => (
  <ScrollView>
    <SingleProperty />
    <SingleProperty uri="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" price="25,000" type="Apartment" title="3 BHK for Rent" address="Old Baneshwor, Kathmandu"/>
    <SingleProperty />
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tab: {
    marginTop:50,
  }
})
