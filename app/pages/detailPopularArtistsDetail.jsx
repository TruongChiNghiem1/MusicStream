import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import imgChart from "../../assets/images/home/Image 13.png";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import imgDot from "../../assets/images/chart_detail/dot.png";
import imgShape from "../../assets/images/chart_detail/Image 23.png";
import Carousel from "react-native-reanimated-carousel";
import imgTrending from "../../assets/images/home/Image 16.png";

export default function DetailPopularArtistsDetail({navigation}) {
    const imgChart = require('../../assets/images/home/Image 13.png')
    const imgDot = require('../../assets/images/chart_detail/dot.png')
    const imgShape = require('../../assets/images/chart_detail/Image 23.png')
    const imgAvt = require('../../assets/images/DetailPopularArtistsDetail/Image 34.png')
    const imgAbout = require('../../assets/images/DetailPopularArtistsDetail/Image 44.png')
    const imgFanAlsoLike = require('../../assets/images/DetailPopularArtistsDetail/Image 46.png')
    return (
        <ScrollView style={{
            padding: 20,
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                paddingBottom: 50,
            }}>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View
                        style={{
                            width: 240,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 10,
                        }}
                    >
                        <Image style={{
                            width: 200,
                            height: 200,
                            borderRadius: 240
                        }} source={imgAvt} />
                    </View>
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 8,
                        }}>Ryan Young</Text>
                        <Text style={{
                            color: 'rgb(126,126,126)',
                            fontSize: 17,
                        }}>65.1K Follower</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 70
                    }}>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            borderRadius: 50,
                            width: 80,
                            height: 35,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 20,
                        }}>
                            <Text>Follow</Text>
                        </TouchableOpacity>
                        <Icon style={{
                            marginRight: 10,
                            color: '#888888',
                        }} name="ellipsis-h" size={18} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 85
                    }}>
                        <Icon style={{
                            color: '#888888',
                        }} name="random" size={18} />
                        <View style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                            backgroundColor: 'black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Icon style={{
                                color: 'white',
                            }} name="play" size={18} />
                        </View>
                    </View>
                </View>

                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginTop: 8,
                }}>Popular</Text>
                <View style={{
                    marginTop: 10
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
                            }} name="ellipsis-h" size={18} />
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        marginBottom: 12
                    }}>
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
                            }} name="ellipsis-h" size={18} />
                        </View>
                    </View>

                    <View style={{
                        marginBottom: 12
                    }}>
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
                            }} name="ellipsis-h" size={18} />
                        </View>
                    </View>

                    <View style={{
                        marginBottom: 12
                    }}>
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
                            }} name="ellipsis-h" size={18} />
                        </View>
                    </View>

                    <View style={{
                        marginBottom: 12
                    }}>
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
                            }} name="ellipsis-h" size={18} />
                        </View>
                    </View>

                    <View style={{
                        marginBottom: 12
                    }}>
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
                            }} name="ellipsis-h" size={18} />
                        </View>
                    </View>
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>Albums</Text>
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
                        marginBottom: 10,
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
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>About</Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
                    }}
                >
                    <Image style={{
                        width: '100%',
                        height: 170,
                        borderRadius: 5,
                        marginBottom: 10,
                    }} source={imgAbout}/>
                    <Text style={{
                        fontSize: 16
                    }}>
                        Do in cupidatat aute et in officia aute laboris est Lorem est nisi dolor consequat voluptate duis irure. Veniam quis amet irure cillum elit aliquip sunt cillum cillum do aliqua voluptate ad non magna elit. Do ea n...
                    </Text>
                    <TouchableOpacity style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                        <Text style={{
                            color: '#b003cd'
                        }}>View more</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>Fans also like</Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginBottom: 10,
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
                                }} source={imgFanAlsoLike} />
                                <Text style={{
                                    color: 'rgba(43,43,43,0.75)',
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                    marginTop: 5
                                }}>Exercitatio</Text>
                                <Text style={{
                                    color: 'rgba(126,126,126,0.48)',
                                    fontSize: 17,
                                }}>Brian Harris</Text>
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
            </View>
        </ScrollView>
    )
}