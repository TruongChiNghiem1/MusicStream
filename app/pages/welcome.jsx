import {Alert, Image, ImageBackground, Text, TextInput, Touchable, TouchableOpacity, View} from "react-native";
import {useState} from "react";
const imgBackground = require("../../assets/images/welcome/Image 1.png")
const imgLogo = require("../../assets/images/welcome/Image 4.png")
export default function Welcome({navigation}) {
    return (
        <ImageBackground style={{
            flex: 1,
        }} source={imgBackground} resizeMode="cover">
            <View style={{
                flex: 1,
                backgroundColor: '#9D45EF33',
            }}>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 80
                }}>
                    <Image source={imgLogo}/>
                </View>

                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 190
                }}>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 100,
                        width: 243
                    }}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 53,
                            textAlign: 'center',
                        }}>Your music Your   artists</Text>
                    </View>
                </View>

                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 100
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'black',
                        width: 370,
                        height: 52,
                        borderRadius: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}><Text style={{
                        color: 'white',
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>Create an account</Text></TouchableOpacity>
                </View>

                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        width: 370,
                        height: 52,
                        borderRadius: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Login')}
                    ><Text style={{
                        color: '#14c0d7',
                        fontSize: 22,
                        fontWeight: 'bold',
                    }}>I already have an account</Text></TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}