import {ScrollView, Text, TextInput, View, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as React from "react";
import Carousel from "react-native-reanimated-carousel";
export default function Home ({navigation}) {
    const imgSuggestions = require('../../assets/images/home/Image 8.png')
    const imgChart = require('../../assets/images/home/Image 13.png')
    const imgTrending = require('../../assets/images/home/Image 16.png')
    const imgPopular = require('../../assets/images/home/Image 10.png')
    return (
        <ScrollView>
            <View style={{
                marginLeft: 20,
                marginRight: 20
            }}>
                <View>
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
                <View
                    style={{
                        marginTop: 15
                    }}
                >
                    <Carousel
                        width={260}
                        height={320}
                        autoPlay={false}
                        data={[...new Array(6).keys()]}
                        scrollAnimationDuration={1000}
                        pagingEnabled={true}
                        style={{
                            overflow: 'visible',
                        }}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    width: 200,
                                }}
                            >
                                <Image style={{
                                    width: 235,
                                    height: 320,
                                    borderRadius: 5
                                }} source={imgSuggestions} />
                                <View style={{
                                    position: 'absolute',
                                    top: 230,
                                    backgroundColor: 'rgba(0,0,0,0.42)',
                                    width: 235,
                                    height: 90
                                }}>
                                    <Text style={{
                                        fontSize: 23,
                                        color: 'white',
                                        marginTop: 15,
                                        marginLeft:20,
                                        fontWeight: 'bold',
                                    }}>Reflection</Text>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'white',
                                        marginTop: 5,
                                        marginLeft: 20,
                                    }}>Christina Aguilera</Text>
                                </View>
                            </View>
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

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>Charts</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 17,
                            color: 'rgba(0,0,0,0.37)'
                        }}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: 10
                    }}
                >
                    <Carousel
                        width={160}
                        height={136}
                        autoPlay={false}
                        data={[...new Array(6).keys()]}
                        scrollAnimationDuration={1000}
                        pagingEnabled={true}
                        style={{
                            overflow: 'visible',
                        }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('chartDetail')}
                                style={{
                                    width: 160,
                                }}
                            >
                                <Image style={{
                                    width: 136,
                                    height: 136,
                                    borderRadius: 5
                                }} source={imgChart} />
                                <View style={{
                                    position: 'absolute',
                                    width: 136,
                                    height: 136,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                    <Text style={{
                                        fontSize: 23,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginBottom: 15,
                                    }}>Top 50</Text>
                                    <Text style={{
                                        fontSize: 15,
                                        color: 'white',
                                    }}>Canada</Text>
                                </View>
                                <Text style={{
                                    color: 'rgba(126,126,126,0.48)',
                                    fontSize: 17,
                                }}>Daily chart-toppers update</Text>
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

                <View style={{
                    marginTop: 60,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>Trending albums</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 17,
                            color: 'rgba(0,0,0,0.37)'
                        }}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: 10,
                    }}
                >
                    <Carousel
                        width={160}
                        height={170}
                        autoPlay={false}
                        data={[...new Array(6).keys()]}
                        scrollAnimationDuration={1000}
                        pagingEnabled={true}
                        style={{
                            overflow: 'visible',
                        }}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    width: 160,
                                }}
                            >
                                <Image style={{
                                    width: 136,
                                    height: 136,
                                    borderRadius: 5
                                }} source={imgTrending} />
                                <Text style={{
                                    color: 'rgba(43,43,43,0.75)',
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                    marginTop: 5
                                }}>ME</Text>
                                <Text style={{
                                    color: 'rgba(126,126,126,0.48)',
                                    fontSize: 17,
                                }}>Jessica Gonzalez</Text>
                            </View>
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

                <View style={{
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>Popular artists</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 17,
                            color: 'rgba(0,0,0,0.37)'
                        }}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: 10,
                    }}
                >
                    <Carousel
                        width={160}
                        height={220}
                        autoPlay={false}
                        data={[...new Array(6).keys()]}
                        scrollAnimationDuration={1000}
                        pagingEnabled={true}
                        style={{
                            overflow: 'visible',
                        }}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    width: 130,
                                }}
                                onPress={() => navigation.navigate('DetailPopularArtistsDetail')}
                            >
                                <Image style={{
                                    width: 136,
                                    height: 136,
                                    borderRadius: 5
                                }} source={imgPopular} />
                                <Text style={{
                                    color: 'rgba(85,85,85,0.81)',
                                    fontSize: 17,
                                    marginTop: 10,
                                    textAlign: 'center'
                                }}>Jennifer Wilson</Text>
                                <View style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'black',
                                        width: 70,
                                        height: 30,
                                        borderRadius: 50,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{
                                            color: 'white',
                                            fontSize: 16
                                        }}>Follow</Text>
                                    </TouchableOpacity>
                                </View>
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
            </View>
        </ScrollView>
    )
}
