import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function PlayList({navigation}) {
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
                    fontSize: 25,
                    marginBottom: 20,
                    fontWeight: 'bold'
                }}>Your playlist</Text>
            </View>

            <ScrollView style={{
            }}>
                <TouchableOpacity style={{
                    marginBottom: 12
                }}
                >
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
                                    marginBottom: 6,
                                }}>Shape of You</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 8
                                }}>
                                    <Text style={{
                                        color: 'rgb(126,126,126)',
                                        fontSize: 14,
                                        marginBottom: 4,
                                        marginRight: 12,
                                    }}>Anthony Taylor</Text>
                                    <Image source={imgDot} style={{
                                        width: 5,
                                        height: 5,
                                        marginRight: 12,
                                    }}/>
                                    <Text style={{
                                        color: 'rgb(126,126,126)',
                                        fontSize: 14,
                                        marginBottom: 4,
                                    }}>12 songs</Text>
                                </View>
                            </View>
                        </View>
                        <Icon style={{
                            marginRight: 10,
                            color: '#888888',
                        }} name="chevron-right" size={18} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    marginBottom: 12
                }}
                >
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
                                    marginBottom: 6,
                                }}>Shape of You</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 8
                                }}>
                                    <Text style={{
                                        color: 'rgb(126,126,126)',
                                        fontSize: 14,
                                        marginBottom: 4,
                                        marginRight: 12,
                                    }}>Anthony Taylor</Text>
                                    <Image source={imgDot} style={{
                                        width: 5,
                                        height: 5,
                                        marginRight: 12,
                                    }}/>
                                    <Text style={{
                                        color: 'rgb(126,126,126)',
                                        fontSize: 14,
                                        marginBottom: 4,
                                    }}>12 songs</Text>
                                </View>
                            </View>
                        </View>
                        <Icon style={{
                            marginRight: 10,
                            color: '#888888',
                        }} name="chevron-right" size={18} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <TouchableOpacity style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black'
                }}>
                    <Icon style={{
                        color: 'white',
                    }} name="plus" size={15} />
                </TouchableOpacity>
            </View>
        </View>
    )
}