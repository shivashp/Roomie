import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { SearchBar } from '../widgets'
import Login from './Login';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <SearchBar />
          <ScrollableTabView style={styles.tab}
            tabBarTextStyle={{fontSize:13, fontWeight: '600', color:'#9DABC0'}}
            tabBarUnderlineStyle ={{backgroundColor: '#3B7CEC', height:2}}
            tabBarActiveTextColor={'#3B7CEC'}>
            <Sample tabLabel="All" />
            <Login tabLabel="Room" />
            <Login tabLabel="Office" />
            <Login tabLabel="Flat" />
          </ScrollableTabView>
      </View>
    )
  }
}

const Sample = () => (
  <View>
    <Text>Home</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tab: {
    marginTop:50,
  }
})
