import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Slides from '../components/Slide';

const SLIDE_DATA = [
    {text: 'Welcome to JobApp', color:'#03A9F4'},
    {text:'Use this to get a job',color:'#009688'},
    {text:'Set your location, then swipe away', color:'#03A9F4'},
];

export default class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
            </View>
        )
    }
}