import {Image, Text, View} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import ListSongs from "../../components/ListSongs";import {getSongsByAlbum} from "../../service/service";
import {useEffect, useState} from "react";
export default function ListOfAlbum(res, { navigation}) {
    const imgChart = require('../../../assets/images/home/Image 13.png')
    const imgDot = require('../../../assets/images/chart_detail/dot.png')
    const [songs, setSongs] = useState([])
    var { data } = res.route.params;
    console.log(data)
    const handleGetSongsOfAlbum = async () => {
        try {
            const res = await getSongsByAlbum('674c9d3ec0de44ab89360ab1')
            console.log(res.data)
            setSongs(res.data)
        }catch (e){
            console.log('Error: ', e.message)
        }
    }

    useEffect(() => {
        handleGetSongsOfAlbum()
    }, []);

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
            <ListSongs data={songs}/>
        </View>
    )
}