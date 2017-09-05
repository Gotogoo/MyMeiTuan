/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import RootScene from './src/RootScene';

class MyMeiTuan extends Component {
    render() {
        return(
            <RootScene />
        );
    }
}

AppRegistry.registerComponent('MyMeiTuan', () => RootScene);
