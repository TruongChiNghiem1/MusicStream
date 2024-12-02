import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
const MusicPlayer = (res) => {
    const [sound, setSound] = useState();
    var { data } = res.route.params;
    console.log(data)
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({
            uri: 'https://res.cloudinary.com/dz96u1u2a/video/upload/v1733061842/TinhLo-LeQuyen_xvpkdw.mp3',
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
            <Text style={styles.title}>Music Player</Text>
            <Button title="Play Sound" onPress={playSound} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default MusicPlayer;
