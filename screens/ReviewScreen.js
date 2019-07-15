import React, {Component} from 'react';
import {View, Text, Platform,ScrollView,Linking} from 'react-native';
import {Button,Card,Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {MapView} from 'expo'

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Review Jobs',
          headerStyle: {marginTop:Platform.OS==='android'?12:0
                },
        tabBarIcon:({tintColor})=>{
            return <Icon name="favorite" size={20} color={tintColor}/>
        },
          headerRight:(
            <Button 
                title='Setting'
                onPress={()=>{navigation.navigate('Setting')}}
                type='clear'
            />),
        };
      };

    renderLikedJobs () {
        return this.props.likedJobs.map(job => {
            const {
                company,
                formattedRelativeTime,
                url,
                longitude,
                latitude,
                jobtitle,
                jobKey,
            } = job;
            const initialRegion={
                longitude:longitude,
                latitude:latitude,
                latitudeDelta:0.045,
                longitudeDelta:0.02,
            }
            return (
                <Card title={jobtitle} key={jobKey}>
                    <View style={{height:200}}>
                        <MapView
                            style={{flex:1}}
                            cacheEnabled={Platform.OS==='android'}
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailwrapper}>
                            <Text style={styles.italic}>{company}</Text>
                            <Text style={styles.italic}>{formattedRelativeTime}</Text>
                        </View>
                        <Button 
                            title="Apply Now!"
                            backgroundColor='#03A9F4'
                            onPress={()=>{Linking.openURL(url)}}
                        />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        )
    }
}

const styles = {
    detailwrapper: {
        marginTop:10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    italic: {
        fontStyle:'italic',
    }
}

function mapStateToProps(state) {
    return {likedJobs:state.likedJobs}
}

export default connect(mapStateToProps)(ReviewScreen);