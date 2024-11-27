import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import imgAvt from "../../assets/images/feed/Avatar 2.png";
import imgPost from "../../assets/images/feed/Image 64.png";
import {useState} from "react";
import {Modal, Button, Provider } from "@ant-design/react-native";
import {KeyboardAvoidingView} from "react-native";

export default function Feed () {
    const imgAvt = require('../../assets/images/feed/Avatar 2.png')
    const imgPost = require('../../assets/images/feed/Image 64.png')

    const [visible2, setVisible2] = useState(false)
    const modalType = 'portal'

    const onClose2 = () =>{
        setVisible2(false);
    }
    return (
        <Provider>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={{
                padding: 10
            }}>
                <View>
                    <Text style={{
                        fontSize: 20,
                        marginBottom: 40
                    }}>Feed</Text>
                </View>
                <ScrollView style={{
                    marginBottom: 50
                }}>
                    <View style={{
                        marginBottom: 30
                    }}>
                        <TouchableOpacity style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: 15,
                        }}>
                            <Image source={imgAvt} style={{
                                marginRight: 15,
                                width: 40,
                                height: 40,
                            }}/>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginBottom: 4
                                }}>Jessica Gonzalez</Text>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        marginRight: 10
                                    }}>Posted a track</Text>
                                    <Text>3d</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderRadius: 6
                        }}>
                            <Image style={{
                                width: '100%',
                                borderRadius: 6
                            }} source={imgPost}/>
                            <View style={{
                                position: 'absolute',
                                top: 230,
                                backgroundColor: 'rgba(62,62,62,0.38)',
                                padding: 24,
                                width: '100%'
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    marginBottom: 5
                                }}>FLOWER</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'white',
                                    }}>Jessica Gonzalez</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 14,
                                            color: 'white',
                                        }} name="play" size={20} />
                                        <Text style={{
                                            fontSize: 18,
                                            color: 'white',
                                            marginRight: 10
                                        }}>125</Text>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 8,
                                            color: 'white',
                                        }} name="circle" size={20} />
                                        <Text style={{
                                            fontSize: 18,
                                            color: 'white',
                                        }}>05:15</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 15,
                            marginLeft: 5,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginRight: 20,
                                }}>
                                    <TouchableOpacity>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 16,
                                        }} name="heart" size={20} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 18
                                    }}>20</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginRight: 20,
                                }}>
                                    <TouchableOpacity onPress={() => setVisible2(true)}>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 16,
                                        }} name="comment" size={20} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 18
                                    }}>20</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginRight: 20,
                                }}>
                                    <TouchableOpacity>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 16,
                                        }} name="sync-alt" size={20} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 18
                                    }}>20</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Icon style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                }} name="ellipsis-h" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        marginBottom: 30
                    }}>
                        <TouchableOpacity style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: 15,
                        }}>
                            <Image source={imgAvt} style={{
                                marginRight: 15,
                                width: 40,
                                height: 40,
                            }}/>
                            <View>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginBottom: 4
                                }}>Jessica Gonzalez</Text>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        marginRight: 10
                                    }}>Posted a track</Text>
                                    <Text>3d</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderRadius: 6
                        }}>
                            <Image style={{
                                width: '100%',
                                borderRadius: 6
                            }} source={imgPost}/>
                            <View style={{
                                position: 'absolute',
                                top: 230,
                                backgroundColor: 'rgba(62,62,62,0.38)',
                                padding: 24,
                                width: '100%'
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    marginBottom: 5
                                }}>FLOWER</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'white',
                                    }}>Jessica Gonzalez</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 14,
                                            color: 'white',
                                        }} name="play" size={20} />
                                        <Text style={{
                                            fontSize: 18,
                                            color: 'white',
                                            marginRight: 10
                                        }}>125</Text>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 8,
                                            color: 'white',
                                        }} name="circle" size={20} />
                                        <Text style={{
                                            fontSize: 18,
                                            color: 'white',
                                        }}>05:15</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 15,
                            marginLeft: 5,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginRight: 20,
                                }}>
                                    <TouchableOpacity>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 16,
                                        }} name="heart" size={20} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 18
                                    }}>20</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginRight: 20,
                                }}>
                                    <TouchableOpacity onPress={() => setVisible2(true)}>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 16,
                                        }} name="comment" size={20} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 18
                                    }}>20</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginRight: 20,
                                }}>
                                    <TouchableOpacity>
                                        <Icon style={{
                                            marginRight: 10,
                                            fontSize: 16,
                                        }} name="sync-alt" size={20} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 18
                                    }}>20</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Icon style={{
                                    marginRight: 10,
                                    fontSize: 20,
                                }} name="ellipsis-h" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Modal
                    popup
                    modalType={modalType}
                    visible={visible2}
                    animationType="slide-up"
                    onClose={onClose2}
                >
                    <View style={{ paddingVertical: 15, paddingHorizontal: 15 }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20
                        }}>
                            <Text style={{
                                fontSize: 25
                            }}>3 comments</Text>
                            <TouchableOpacity onPress={onClose2}>
                                <Icon style={{
                                    marginRight: 10,
                                    fontSize: 25,
                                }} name="chevron-down" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            height: 400,
                            justifyContent: 'space-between',
                        }}>
                            <TouchableOpacity style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginBottom: 15,
                            }}>
                                <Image source={imgAvt} style={{
                                    marginRight: 15,
                                    width: 40,
                                    height: 40,
                                }}/>
                                <View>
                                    <View style={{
                                        marginBottom: 8,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: 330,
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                marginRight: 10
                                            }}>Jessica Gonzalez</Text>
                                            <Text style={{
                                                fontSize: 18,
                                            }}>Do duis cul :))</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Icon style={{
                                                marginRight: 10,
                                                fontSize: 15,
                                            }} name="thumbs-up" size={20} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        <Text style={{
                                            marginRight: 10
                                        }}>17h</Text>
                                        <Text style={{
                                            marginRight: 10
                                        }}>1 like</Text>
                                        <Text>Reply</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 100,
                                    backgroundColor: '#a800ed',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 16,
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 30,
                                    }}>A</Text>
                                </View>
                                <TextInput style={{
                                    borderWidth: 1,
                                    borderRadius: 100,
                                    width: 310,
                                    height: 50,
                                    paddingHorizontal: 20,
                                    fontSize: 20
                                }} placeholder="Write a comment..."/>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            </KeyboardAvoidingView>
        </Provider>
    )
}