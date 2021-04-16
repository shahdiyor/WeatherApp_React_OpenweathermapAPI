import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class WeatherCard extends React.Component {
    render() {
        return(
            <View>
            {this.props.temp&&
                <View style={styles.card}>
                        <Text style={styles.text_main}> {this.props.temp}°</Text>
                        <Text style={styles.text_fell}>Ощущается как {this.props.feels_like}°</Text>
                    <View style={styles.view}>
                        <Text style={styles.text_t}>Влажность</Text>
                        <Text style={styles.text_third}>Скорость ветра</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text_f}>{this.props.humidity}</Text>
                        <Text style={{
                            textAlign: 'center',
                            width: '50%',
                            fontSize: 15,
                            marginLeft: 20,
                            color: '#d6d6d6',}}>{this.props.wind}</Text>
                    </View>
                </View>
            }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    card: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height:400,
        width: '100%',
        backgroundColor: '#3949ab',
    },
    text_main: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 200,
        color: '#ffff'
    },
    text_fell:{
        textAlign: 'center',
        color:'#d6d6d6',
        fontSize:15,
        marginBottom: 20
    },
    text_third: {
        textAlign: 'center',
        width: '50%',
        fontSize: 20,
        marginLeft: 20,
        color: '#fff',
    },
    text_t: {
        textAlign: 'center',
        width: '40%',
        fontSize: 20,
        marginLeft: 20,
        color: '#fff',
    },
    text_f: {
        textAlign: 'center',
        width: '40%',
        fontSize: 15,
        marginLeft: 20,
        color: '#d6d6d6',
    },
    view:{
        flexDirection: 'row',
        justifyContent: 'center',
    }
})