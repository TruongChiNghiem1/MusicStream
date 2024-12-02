// Chatbot.js
import React, { useState } from 'react';
import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-web";
import ChatbotApp from "./ChatbotApp";
const Chatbot = () => {
    const [count, setCount] = useState(0)

    return (
        <View>
            <SafeAreaView style={{ flex: 1 }}>

                <Text
                    style={{
                        marginLeft: 23,
                        fontSize: 20,
                        marginTop: 20,
                        fontWeight: 'bold',
                        color: 'green',
                        backgroundColor: 'yellow',
                        marginRight: 30
                    }}>
                    GeekforGeeks ChatBot App</Text>

                <ChatbotApp />
            </SafeAreaView>
        </View>
    );
};

export default Chatbot;
