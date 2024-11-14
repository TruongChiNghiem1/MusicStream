import {ImageBackground, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as React from "react";
import imgBackground from "../../assets/images/play/Image 29.png";

export default function Play() {
    return (
        <ImageBackground style={{
            flex: 1,
            justifyContent: 'space-between',
        }} source={imgBackground} resizeMode="cover">
            <View style={{
                paddingTop: 25,
                backgroundColor: 'rgba(0,0,0,0.34)'
            }}>
                <View style={{
                    padding: 20,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                        }}>Play</Text>
                        <Icon style={{
                            color: 'white',
                        }} name="chevron-down" size={18} />
                    </View>
                </View>
            </View>

            <View style={{
                backgroundColor: 'rgba(0,0,0,0.34)'
            }}>
                <View style={{
                    padding: 20,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 5
                    }}>FLOWER</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                    }}>Jessica Gonzalez</Text>
                </View>
            </View>
        </ImageBackground>
    )
}