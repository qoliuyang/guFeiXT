/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
//import App from './App';
import AppRoot from './src/Root';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import createStore from './src/redux/configure-store';
const store = createStore();
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('appStore', store);
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);
