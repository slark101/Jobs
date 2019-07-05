import React, {Component} from 'react';
import {View,AsyncStorage} from 'react-native';
import {AppLoading} from 'expo';
import {_} from 'lodash';
import Slides from '../components/Slide';

const SLIDE_DATA = [
    {text: 'Welcome to JobApp', color:'#03A9F4'},
    {text:'Use this to get a job',color:'#009688'},
    {text:'Set your location, then swipe away', color:'#03A9F4'},
];

export default class WelcomeScreen extends Component {
    state = {token:null}

    onSlidesComplete = () => {
        this.props.navigation.navigate('Auth')
    }

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            this.props.navigation.navigate('Map');
            this.setState({token});
        }
        else {
            this.setState({token:false});
        }
    }

    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading/>;
        }

        return (
            <View style={{flex:1}}>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
            </View>
        )
    }
}