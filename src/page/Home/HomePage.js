import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {requestTeamListAction} from '../../redux/modules/home/actions';
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class HomePage extends Component {
  static navigationOptions = {
    tabBarLabel: '主页',
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
        <Text>这是HomePage</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const {home} = state;
  return {
    home,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    requestTeamListAction: bindActionCreators(requestTeamListAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

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
