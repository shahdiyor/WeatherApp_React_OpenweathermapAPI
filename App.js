import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View, Picker,Alert} from 'react-native';
import WeatherCard from './src/WeatherCard';

export default class App extends React.Component {

    state = {
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined,
        feels_like: undefined,
        speed: undefined,
        humidity: undefined,
        value: undefined
    }
    componentDidMount() {
        this.getWeatherCurrent('Krasnoyarsk');
    }
    API_KEY = "961b7ded10f2be5cb6b598f0160b2c58";
    getWeatherCurrent = async (value) => {
        try {
            const url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${this.API_KEY}`);
            const data = await url.json();
            this.setState({
                temp: (data.main.temp - 273.15).toFixed(),
                temp_max: (data.main.temp_max - 273.15).toFixed(),
                temp_min: (data.main.temp_min - 273.15).toFixed(),
                feels_like: (data.main.feels_like - 273.15).toFixed(),
                speed: `${data.wind.speed + 'м/с'}`,
                humidity: `${data.main.humidity + '%'}`,
                value: value
            });
        }
        catch (e) {
            Alert.alert(
                "Ошибка",
                "Повторите попытку позже",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    }
    render() {
        return (
            <View >
                <StatusBar style="light"/>
                <View style={styles.NavBar}>
                    <Text style={styles.text_Nav}>Погода</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Выберите город</Text>
                    <Picker
                        selectedValue={this.state.value}
                        style={{height: 50, width: '80%'}}
                        onValueChange={(itemValue) =>this.getWeatherCurrent(itemValue)}
                    >
                        <Picker.Item label="Красноярск" value="Krasnoyarsk"/>
                        <Picker.Item label="Белгород" value="Belgorod"/>
                        <Picker.Item label="Санк-Петербург" value="Saint Petersburg"/>
                        <Picker.Item label="Новосибирск" value="Novosibirsk"/>
                    </Picker>
                </View>
                <View style={{position: 'absolute', top:0, width: `100%`}}>
                    <WeatherCard
                        temp = {this.state.temp}
                        temp_max = {this.state.temp_max}
                        temp_min = {this.state.temp_min}
                        feels_like = {this.state.feels_like}
                        wind = {this.state.speed}
                        humidity = {this.state.humidity}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            marginTop:20,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            marginBottom: 5
        },
        NavBar: {
            height:400,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3949ab',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40
        },
        text_Nav: {
            marginTop: 20,
            color:'white',
            fontSize:40,
        }
    }
);