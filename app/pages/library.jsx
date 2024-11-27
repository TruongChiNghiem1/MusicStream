import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import imgChart from "../../assets/images/home/Image 13.png";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import imgDot from "../../assets/images/chart_detail/dot.png";
import imgShape from "../../assets/images/chart_detail/Image 23.png";

export default function Library({navigation}) {
    const imgChart = require('../../assets/images/home/Image 13.png')
    const imgDot = require('../../assets/images/chart_detail/dot.png')
    const imgShape = require('../../assets/images/chart_detail/Image 23.png')
    return (
        <View style={{
            padding: 20,
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View>
                <Text style={{
                    fontSize: 20,
                    marginBottom: 40
                }}>Your library</Text>

            </View>


            <ScrollView style={{
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