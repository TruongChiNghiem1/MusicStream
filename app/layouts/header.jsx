import {Image, View} from "react-native";
import imgLogo from "../../assets/images/logo/primary_logo.png";
import Icon from "react-native-vector-icons/FontAwesome5";
import imgAvtHome from "../../assets/images/home/Avatar 1.png";
import * as React from "react";

export default function Header() {
    return (
        <View style={{
            paddingTop: 35
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
            }}>
                <View>
                    <Image 
                    style={{
                        width: 50, 
                        height: 50,
                    }} 
                    source={imgLogo} />
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon style={{
                        marginRight: 20,
                        color: '#9c9c9c'
                    }} name="bell" size={26} />
                    <Image source={imgAvtHome}/>
                </View>
            </View>
        </View>

    )
}