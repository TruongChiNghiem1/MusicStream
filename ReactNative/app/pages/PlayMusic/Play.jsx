import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton";
import Slider from '@react-native-community/slider';

const MusicPlayer = (res) => {
    const navigation = useNavigation();
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0);
    var { data } = res.route.params;

    // Hàm chuyển đổi giây sang định dạng phút:giây
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    async function playSound() {
        if (sound) {
            await sound.playAsync(); // Chỉ phát lại nếu đã dừng
            setIsPlaying(true);
        } else {
            const { sound: newSound } = await Audio.Sound.createAsync({
                uri: data?.link,
                shouldPlay: true
            });
            setSound(newSound);
            setIsPlaying(true);

            newSound.setOnPlaybackStatusUpdate((status) => {
                if (status.isLoaded) {
                    setPosition(status.positionMillis);
                    setDuration(status.durationMillis);
                }
            });

            await newSound.playAsync();
        }
    }

    async function stopSound() {
        if (sound) {
            await sound.stopAsync();
            setIsPlaying(false);
        }
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
        <ImageBackground style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        }}
                         source={{ uri: data?.image }}
                         resizeMode="cover"
                         blurRadius={20}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 30,
                    }} onPress={() => navigation.navigate('Main')}>
                        <Icon style={styles.icon} name="chevron-left" size={16} />
                        <Text style={styles.titleText}>{data.title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Image
                        style={styles.image}
                        source={{ uri: data?.image }}
                        resizeMode="cover"
                    />
                    <Text style={styles.title}>{data?.title}</Text>

                    <View style={{
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.positionText}>{formatTime(position)}</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={duration}
                            value={position}
                            onValueChange={async (value) => {
                                if (sound) {
                                    await sound.setPositionAsync(value);
                                }
                            }}
                        />
                        <Text style={styles.positionText}>{formatTime(duration)}</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <PrimaryButton
                            style={styles.npButton}
                            styleText={{ fontSize: 16 }}
                            text={'Prev'}
                        />
                        <PrimaryButton
                            style={styles.playButton}
                            styleText={{ fontSize: 16 }}
                            text={isPlaying ? 'Dừng' : 'Phát'}
                            onPress={isPlaying ? stopSound : playSound}
                        />
                        <PrimaryButton
                            style={styles.npButton}
                            styleText={{ fontSize: 16 }}
                            text={'Next'}
                        />
                    </View>

                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 40,
        paddingTop: 50,
        alignItems: 'center',
        width: '100%',
    },
    header: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    icon: {
        marginRight: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 300,
        height: 400,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    playButton: {
        width: 120,
        height: 45,
        borderRadius: 60,
        marginTop: 6,
    },
    npButton: {
        width: 80,
        height: 45,
        borderRadius: 60,
        marginTop: 6,
        margin: 10,
    },
    slider: {
        width: 300,
        height: 40,
        marginTop: 12,
    },
    positionText: {
        marginTop: 10,
        fontSize: 16,
    },
});

export default MusicPlayer;
