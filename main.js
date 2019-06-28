import React from 'react';
import { StyleSheet, View} from 'react-native';
import {createBottomTabNavigator,createAppContainer,createStackNavigator} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';



const MainNavigator = createBottomTabNavigator(
    {
        Welcome: {screen: WelcomeScreen,},
        Auth: {screen: AuthScreen,},
        Main : {screen: createBottomTabNavigator(
            {
                Map:{screen:MapScreen},
                Deck: {screen:DeckScreen},
                Review: {screen: createStackNavigator(
                    {
                        ReviewJobs: {screen:ReviewScreen},
                        Setting:{screen:SettingsScreen},
                    }
                )}
            }
        )}
    },
);

const TabContainer = createAppContainer(MainNavigator);

export default class Main extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TabContainer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    }
})