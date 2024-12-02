import React from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import imgDot from "../../assets/images/chart_detail/dot.png";
const ListSongs = ( { data, artist, navigation } ) => {
    return (
        <ScrollView>
            {data.length > 0 ? (
                <>
                    {data.map((song, key) => {
                        return(
                            <TouchableOpacity
                                key={`song_${key + 1}`}
                                style={{
                                    marginBottom: 12
                                }}
                                onPress={() => navigation.navigate('Play', {data: song})}
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
                                        }} source={{ uri: song?.image}}/>
                                        <View style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <Text style={{
                                                fontSize: 19,
                                                marginBottom: 2,
                                            }}>{song?.title}</Text>
                                            <Text style={{
                                                color: 'rgb(126,126,126)',
                                                fontSize: 14,
                                                marginBottom: 4,
                                            }}>{artist}</Text>
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
                        )
                    })}
                </>
            ) : (
                <Text>No songs to play</Text>
            )}
        </ScrollView>
    )
}

export default ListSongs