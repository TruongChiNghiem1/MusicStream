import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Audio } from 'expo-av';
import Icon from "react-native-vector-icons/FontAwesome5";
import {useNavigation} from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton";
const MusicPlayer = (res) => {
    const navigation = useNavigation();
    const [sound, setSound] = useState();
    var { data } = res.route.params;
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({
            uri: data?.link,
            shouldPlay: true
        });
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginBottom: 16
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
                    }} name="chevron-left" size={16} />
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight:'bold',

                        }}
                    >
                        {data.title}
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    style={{
                        width: 300,
                        height: 400,
                        borderRadius: 10
                    }}
                    source={{ uri: data?.image }}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{data?.title}</Text>
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
                    text={'PlaySound'}
                    onPress={playSound}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 40,
        paddingTop: 50,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor:'white',
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold'
    },
});

export default MusicPlayer;
