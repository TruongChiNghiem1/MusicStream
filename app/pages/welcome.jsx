import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
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
                    <PrimaryButton
                        text={'Create an account'}
                        onPress={() => {}}
                    />

                     <SecondaryButton
                        style={{ marginTop: 12 }}
                        text={'I already have an account'}
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}