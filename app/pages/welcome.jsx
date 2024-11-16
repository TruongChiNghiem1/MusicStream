import {Alert, Image, ImageBackground, Text, TextInput, Touchable, TouchableOpacity, View} from "react-native";
import {useState} from "react";
const imgBackground = require("../../assets/images/welcome/Sound.png")
const imgLogo = require("../../assets/images/welcome/Image 4.png")
export default function Welcome({navigation}) {
    return (
        <ImageBackground 
            style={{
                flex: 1,
                paddingBottom: 40
            }} 
            source={imgBackground} 
            resizeMode="cover"
        >
            <View 
                style={{
                    flex: 1,
                    justifyContent:'flex-end',
                    alignItems: 'center',
                }}
            >
                <View>
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
                        fontSize: 22,
                        fontWeight: 'bold',
                    }}>Create an account</Text></TouchableOpacity>
            
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        width: 370,
                        height: 52,
                        borderRadius: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 12
                    }}
                    onPress={() => navigation.navigate('Login')}
                    ><Text style={{
                        color: '#000000',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>I already have an account</Text></TouchableOpacity>
            
                </View>
            </View>
        </ImageBackground>
    )
}