import React from 'react';
import { StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import {Provider} from 'react-redux';

import store from './store';
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
                ),
                    navigationOptions: {
                        title:'Review',
                        tabBarIcon:({tintColor})=>{
                            return <Icon name="favorite" size={20} color={tintColor}/>
                        }
                    }
                }
            },{
                tabBarOptions:{
                    labelStyle:{fontSize:12}
                },
            }
        )}
    },
    {
        defaultNavigationOptions:{
            tabBarVisible:false
        },
        lazy:true
    }
);

const TabContainer = createAppContainer(MainNavigator);

export default class Main extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <View style={styles.container}>
                    <TabContainer/>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    }
})