import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {Button} from 'react-native-elements';

export default class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Review Jobs',
          headerStyle: {marginTop:Platform.OS==='android'?12:0
                },
          headerRight:(
            <Button 
                title='Setting'
                onPress={()=>{navigation.navigate('Setting')}}
                type='clear'
            />),
        };
      };

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        )
    }
}