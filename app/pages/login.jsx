import {Alert, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

export default function Login({navigation}) {
    const imgLogo = require("../../assets/images/Image 7.png")
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const arrLogin = [{
        username: 'admin',
        password: '123'
    }, {
        username: 'nghiem',
        password: '123'
    }]

    const toLogin = () => {
        // var isLogin = arrLogin.some(userPass =>
        //     userPass.username === username && userPass.password === password
        // )
        //
        // if(isLogin) {
            navigation.navigate('Main')
        // } else{
        //     Alert.alert("Thông báo", "Sai tài khoản hoặc mật khẩu")
        // }
    }

    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            paddingTop: 150,
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View
                
            >

            </View>
            <Image style={{
                width: 70,
                height: 50,
            }} source={imgLogo} />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 40,
                marginTop: 10
            }}>Hello Again!</Text>
            <Text style={{
                marginTop: 3,
                color: '#989898',
                fontSize: 15,
            }}>Log into your account</Text>

            <View style={{
                marginTop: 30
            }}>
                <TextInput
                    onChangeText={setUsername}
                    placeholder="Enter your email address"
                    style={{
                        height: 40,
                        width: 300,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 12,
                        borderColor: '#989898',
                        paddingLeft: 20
                    }}
                    placeholderTextColor='#989898'
                />
            </View>
            <View style={{
            }}>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    style={{
                        height: 40,
                        width: 300,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 12,
                        borderColor: '#989898',
                        paddingLeft: 20
                    }}
                    placeholderTextColor='#989898'
                />
            </View>
            <View style={{
                width: 280,
                display: 'flex',
                alignItems: 'flex-end',
            }}>
                <TouchableOpacity>
                    <Text style={{
                        color: '#019d80'
                    }}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 25
            }}>
                <TouchableOpacity
                    onPress={toLogin}

                    style={{
                        borderWidth: 1,
                        width: 300,
                        height: 45,
                        backgroundColor: '#019d80',
                        borderColor: '#019d80',
                        borderRadius: 15,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}