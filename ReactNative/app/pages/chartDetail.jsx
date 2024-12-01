import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import imgChart from "../../assets/images/home/Image 13.png";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import imgDot from "../../assets/images/chart_detail/dot.png";
import imgShape from "../../assets/images/chart_detail/Image 23.png";

export default function ChartDetail({navigation}) {
    const imgChart = require('../../assets/images/home/Image 13.png')
    const imgDot = require('../../assets/images/chart_detail/dot.png')
    const imgShape = require('../../assets/images/chart_detail/Image 23.png')
    return (
        <View style={{
            padding: 20,
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                flexDirection: 'row'
            }}>
                <View
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
                </View>

                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: 26,
                        fontWeight: 'bold',
                        marginBottom: 8,
                    }}>Top 50 - Canada</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 8
                    }}>
                        <Icon style={{
                            marginRight: 10,
                            color: '#888888',
                        }} name="heart" size={15} />
                        <Text style={{
                            fontSize: 18,
                            marginRight: 15,
                            color: '#888888',
                        }}>1.234</Text>
                        <Image source={imgDot} style={{
                            width: 8,
                            height: 8,
                            marginRight: 15,
                        }}/>
                        <Text  style={{
                            fontSize: 18,
                            color: '#888888',
                        }}>05:10:18</Text>
                    </View>
                    <Text style={{
                        color: 'rgb(126,126,126)',
                        fontSize: 17,
                    }}>Daily chart-toppers update</Text>
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
                    <Icon style={{
                        marginRight: 10,
                        color: '#888888',
                    }} name="heart" size={18} />
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

            <ScrollView style={{
                marginTop: 20
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
            </ScrollView>
        </View>
    )
}