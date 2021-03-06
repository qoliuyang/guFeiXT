import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class loginPage extends Component {
  static navigationOptions = {
    tabBarLabel: '好友',
    tabBarIcon: ({focused}) => {
      if (focused) {
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('../../img/friend.png')}
          />
        );
      }
      return (
        <Image
          style={styles.tabBarIcon}
          source={require('../../img/friend_default.png')}
        />
      );
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>这是loginPage</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  },
});
