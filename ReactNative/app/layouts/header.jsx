import {Image, View} from "react-native";
import imgLogo from "../../assets/images/logo/primary_logo.png";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

export default function Header() {
    const [user, setUser] = useState({})
    const getDataUser = async () =>{
        try {
            const userStorage = await AsyncStorage.getItem('user')
            const user = JSON.parse(userStorage);
            setUser(user)
        }catch (e) {
            console.log('Error: ', e.message)
        }
    }

    useEffect(() => {
        getDataUser()
    }, []);

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
                    <Image
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 100
                        }}
                        source={{uri: user?.avatar}}/>
                </View>
            </View>
        </View>

    )
}