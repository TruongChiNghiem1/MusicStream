import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SecondaryButton = ({ text, onPress, style }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, style]} 
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 370,
        height: 52,
        borderRadius: 50,
        backgroundColor: '#ffffff', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000', 
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default SecondaryButton;
