import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as React from "react";
import { Tabs } from '@ant-design/react-native'
import imgShape from "../../assets/images/chart_detail/Image 23.png";
import Icon from "react-native-vector-icons/FontAwesome5";
import imgDot from "../../assets/images/chart_detail/dot.png";

export default function Search () {
    const tabs = [
        { title: 'All' },
        { title: 'Tracks' },
        { title: 'Albums' },
        { title: 'Artists' },
    ]

    const style = {
        height: 150,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    }
    return (
        <View style={{ flex: 1,padding: 20, }}>
            <TextInput style={{
                borderWidth: 1,
                borderRadius: 50,
                height: 40,
                fontSize: 18,
                paddingLeft: 18,
                marginBottom: 20,
            }} placeholder='Search...'/>
            <Tabs tabs={tabs}>
                <View style={style}>
                    <View style={{
                        marginBottom: 12
                    }}>
                        <TouchableOpacity style={{
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
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style}>
                    <Text>Content of Second Tab</Text>
                </View>
                <View style={style}>
                    <Text>Content of Third Tab</Text>
                </View>
            </Tabs>
        </View>
    )
}