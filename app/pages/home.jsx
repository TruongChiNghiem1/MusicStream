import {ScrollView, Text, TextInput, View, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as React from "react";
import Carousel from 'react-native-snap-carousel';
export default function Home () {
    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{
                margin: 20
            }}>
                <View style={{
                    marginTop: 20
                }}>
                    <Text style={{
                        color: '#8f8f8f',
                        fontSize: 20,
                    }}>Good morning,</Text>
                </View>
                <View style={{
                    marginTop: 5
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}>Ashley Scott</Text>
                </View>

                <View style={{
                    marginTop: 15
                }}>
                    <Icon style={{
                        position: 'absolute',
                        top: 14,
                        left: 20,
                        fontSize: 16,
                    }} name="search" />
                    <TextInput style={{
                        borderWidth: 1,
                        borderRadius: 50,
                        borderColor: 'rgba(143,143,143,0.53)',
                        height: 45,
                        paddingLeft: 47,
                        fontSize: 18
                    }}
                    placeholder="What you want to listen to"
                    placeholderTextColor="rgba(143,143,143,0.53)"
                    />
                </View>

                <View style={{
                    marginTop: 40
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>Suggestions for you</Text>
                </View>
                <View>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
