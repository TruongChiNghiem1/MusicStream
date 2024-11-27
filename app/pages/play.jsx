import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const MusicPlayer = () => {
    useEffect(() => {
        // Tải nhạc khi component được mount
        // SoundPlayer.loadUrl('https://example.com/your-audio-file.mp3'); // Thay thế bằng URL của file âm thanh

        return () => {
            SoundPlayer.stop();
        };
    }, []);

    const playMusic = () => {
        SoundPlayer.play();
    };

    const pauseMusic = () => {
        SoundPlayer.pause();
    };

    const stopMusic = () => {
        SoundPlayer.stop();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Music Player</Text>
            <Button title="Play" onPress={playMusic} />
            <Button title="Pause" onPress={pauseMusic} />
            <Button title="Stop" onPress={stopMusic} />
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
