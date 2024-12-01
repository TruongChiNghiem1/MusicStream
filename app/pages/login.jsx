import {Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {useState} from "react";
import PrimaryButton from "../components/PrimaryButton";
import background from '../../assets/images/welcome/login_bg.png';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Login({navigation}) {
    const imgLogo = require("../../assets/images/logo/logo.png")
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
        <ImageBackground
            style={styles.imageBackground}
            source={background} 
            resizeMode="cover"
            blurRadius={20}
            
        >
             <View style={styles.overlay} />
             <View
                style={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}
             >
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Welcome')}>
                        <Icon style={{
                            marginRight: 10
                        }} name="chevron-left" size={20} />
            </TouchableOpacity>
        
            </View>
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    paddingTop: 150
                }}
            >
                 <Image style={{
                width: 180,
                height: 145
            }} source={imgLogo} />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: 'white'
            }}>Welcome back!</Text>
            <Text
                style={{
                    fontSize: 12,
                    color: 'white'
                }}
            >
                Ready to discover your next favorite track
            </Text>
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
                    borderColor: '#ffffff',
                    paddingLeft: 20
                }}
                placeholderTextColor='#ffffff'
            />
        
                <TextInput
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    style={{
                        height: 40,
                        width: 300,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 12,
                        borderColor: '#ffffff',
                        paddingLeft: 20
                    }}
                    placeholderTextColor='#ffffff'
                />
        
            <View style={{
                marginTop: 6,
                width: 280,
                display: 'flex',
                alignItems: 'flex-end',
            }}>
                <TouchableOpacity>
                    <Text style={{
                        color: 'white'
                    }}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <PrimaryButton
                style={{
                    width: 300,
                    height: 45,
                    borderRadius: 60,
                    marginTop: 6
                }}
                styleText={{
                    fontSize: 16
                }}
                text={'Continue'}
                onPress={toLogin}
            />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        paddingBottom: 40,
        paddingTop: 50,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    },
});