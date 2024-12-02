import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton";
import Slider from '@react-native-community/slider';
import { getSongs } from "../../service/service";

const MusicPlayer = (res) => {
    const navigation = useNavigation();
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0);
    const [tracks, setTracks] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    var { data } = res.route.params;

    const handleGetAlbums = async () => {
        try {
            const response = await getSongs();
            setTracks(response.data);
            setLoading(false);
        } catch (e) {
            console.log('Error: ', e.message);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    async function playSound() {
        if (sound) {
            await sound.playAsync();
            setIsPlaying(true);
        } else {
            const { sound: newSound } = await Audio.Sound.createAsync({
                uri: tracks[currentTrackIndex]?.link,
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

    function nextTrack() {
        const nextIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextIndex);
        updateTrack(nextIndex);
    }

    function previousTrack() {
        const previousIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(previousIndex);
        updateTrack(previousIndex);
    }

    async function updateTrack(index) {
        if (sound) {
            await sound.unloadAsync(); // Giải phóng âm thanh hiện tại
        }
        const { sound: newSound } = await Audio.Sound.createAsync({
            uri: tracks[index]?.link,
            shouldPlay: true
        });
        setSound(newSound);
        setIsPlaying(true);
        setPosition(0); // Reset vị trí về 0

        newSound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded) {
                setPosition(status.positionMillis);
                setDuration(status.durationMillis);
            }
        });

        await newSound.playAsync();
    }

    useEffect(() => {
        handleGetAlbums();
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
                         source={{ uri: tracks[currentTrackIndex]?.image }} // Cập nhật ảnh nền
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
                        <Text style={styles.titleText}>{tracks[currentTrackIndex]?.title || 'No Title'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Image
                        style={styles.image}
                        source={{ uri: tracks[currentTrackIndex]?.image }} // Cập nhật ảnh bài hát
                        resizeMode="cover"
                    />
                    <Text style={styles.title}>{tracks[currentTrackIndex]?.title || 'No Title'}</Text>

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
                            onPress={previousTrack} // Gọi hàm previousTrack
                        />
                        <PrimaryButton
                            style={styles.playButton}
                            styleText={{ fontSize: 16 }}
                            text={isPlaying ? 'Pause' : 'Play'}
                            onPress={isPlaying ? stopSound : playSound}
                        />
                        <PrimaryButton
                            style={styles.npButton}
                            styleText={{ fontSize: 16 }}
                            text={'Next'}
                            onPress={nextTrack} // Gọi hàm nextTrack
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
