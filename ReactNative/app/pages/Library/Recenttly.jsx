import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Carousel from "react-native-reanimated-carousel";
const Recently = ( { navigation }) =>{
    const trackImage = require('../../../assets/images/play/track_01.jpg')
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            height: 230
        }}>
            <Text style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold'
            }}>Recently played</Text>
            <View
                style={{
                    paddingLeft: 160,
                }}
            >
                <Carousel
                    vertical={false}
                    width={180}
                    height={180}
                    autoPlay={false}
                    data={[...new Array(3).keys()]}
                    scrollAnimationDuration={1000}
                    pagingEnabled={true}
                    style={{
                        overflow: 'visible',
                    }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                borderRadius: 20,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => navigation.navigate('playList')}
                        >
                            <Image
                                source={trackImage}
                                style={styles.trackImage}
                            />
                            <Text style={{
                                color: 'rgba(67,67,67,0.8)',
                                fontSize: 16,
                                fontWeight: 600
                            }}>Playlists</Text>
                            <Text style={{
                                color: 'rgba(67,67,67,0.8)',
                                fontSize: 14,
                            }}>Trending Music</Text>
                        </TouchableOpacity>
                    )}
                    mode="stack"
                    modeConfig={{
                        stackInterval: 1,
                        moveSize: 10,
                        scaleInterval: 0.08,
                        rotateZDeg: 135,
                    }}
                />
            </View>
        </View>
    )
}

export default Recently

const styles = StyleSheet.create({
    trackImage: {
        borderRadius: 10,
        width: 150,
        height: 150
    },
});

