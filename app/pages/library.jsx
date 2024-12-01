import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Carousel from "react-native-reanimated-carousel";

export default function Library({navigation}) {
    const imgDot = require('../../assets/images/chart_detail/dot.png')
    const imgShape = require('../../assets/images/chart_detail/Image 23.png')
    return (
        <View style={{
            padding: 20,
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    fontSize: 20,
                    marginBottom: 20,
                    fontWeight: 'bold'
                }}>Your library</Text>
                <TouchableOpacity>
                    <Icon style={{
                        marginRight: 10,
                        fontSize: 20,
                    }} name="search" size={20} />
                </TouchableOpacity>
            </View>

            <View
                style={{
                }}
            >
                <Carousel
                    width={100}
                    height={136}
                    autoPlay={false}
                    data={[...new Array(2).keys()]}
                    scrollAnimationDuration={1000}
                    pagingEnabled={true}
                    style={{
                        overflow: 'visible',
                    }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgba(211,211,211,0.31)',
                                width: 90,
                                height: 30,
                                borderRadius: 60,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => navigation.navigate('playList')}
                        >
                            <Text style={{
                                color: 'rgba(67,67,67,0.8)',
                                fontSize: 17,
                            }}>Playlists</Text>
                        </TouchableOpacity>
                    )}
                    mode="stack"
                    modeConfig={{
                        stackInterval: 1,
                        moveSize: 10,
                        scaleInterval: 0.08,
                        rotateZDeg: 135,
                        snapDirection: 'left',
                    }}
                />
            </View>

            <ScrollView style={{
                marginTop: 50
            }}>
                <TouchableOpacity style={{
                    marginBottom: 12
                }}
                    onPress={() => navigation.navigate('Play')}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Image style={{
                                width: 60,
                                height: 60,
                                borderRadius: 5,
                                marginRight: 15,
                            }} source={imgShape}/>
                            <View style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 19,
                                    marginBottom: 2,
                                }}>Shape of You</Text>
                                <Text style={{
                                    color: 'rgb(126,126,126)',
                                    fontSize: 14,
                                    marginBottom: 4,
                                }}>Anthony Taylor</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 8
                                }}>
                                    <Icon style={{
                                        marginRight: 6,
                                        color: '#888888',
                                    }} name="play" size={10} />
                                    <Text style={{
                                        fontSize: 14,
                                        marginRight: 12,
                                        color: '#888888',
                                    }}>68M</Text>
                                    <Image source={imgDot} style={{
                                        width: 5,
                                        height: 5,
                                        marginRight: 12,
                                    }}/>
                                    <Text  style={{
                                        fontSize: 14,
                                        color: '#888888',
                                    }}>03:25</Text>
                                </View>
                            </View>
                        </View>
                        <Icon style={{
                            marginRight: 10,
                            color: '#888888',
                        }} name="heart" size={18} />
                    </View>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
}