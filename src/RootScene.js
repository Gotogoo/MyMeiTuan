import React, { Component, PureComponent } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import HomeScene from './scene/Home/HomeScene';
import NearbyScene from './scene/NearBy/NearbyScene';
import StrollScene from './scene/Stroll/StrollScene';
import OrderScene from './scene/Order/OrderScene';
import MineScene from './scene/Mine/MineScene';
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene';
import WebScene from './component/WebScene';

const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

class RootScene extends Component {
    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }

            />
        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScene,
            navigationOptions: ({ navigate }) => ({
                tabBarLabel: '团购',

            })
        },
        Nearby: {
            screen: NearbyScene,
            navigationOptions: ({ navigate }) => ({
                tabBarLabel: '附近',
            })
        },
        Stroll: {
            screen: StrollScene,
            navigationOptions: ({ navigate }) => ({
                tabBarLabel: '逛一逛',
            })
        },
        Order: {
            screen: OrderScene,
            navigationOptions: ({ navigate }) => ({
                tabBarLabel: '订单',
            })
        },
        Mine: {
            screen: MineScene,
            navigationOptions: ({ navigate }) => ({
                tabBarLabel: '我的',
            })
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#06C1AE',
            inactiveTintColor: '#979779',
            style: { backgroundColor: '#ffffff' },
        },

    }

)

const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        //Web: { screen: WebScene },
        //GroupPurchase: { screen: GroupPurchaseScene},
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon:true,
        },
    }
);


export default RootScene;