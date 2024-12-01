import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Recently from "./Recenttly";
import ListenHistory from "./ListenHistory";

export default function Library({navigation}) {
    return (
        <View style={{
            padding: 20,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'start',
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

            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LikeTrack')}
                >
                    <View style={styles.libraryItems}>
                        <Text
                            style={{ fontSize: 16 }}
                        >
                             Liked tracks
                        </Text>
                          <Icon name="chevron-right" size={20} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Playlists')}
                >
                    <View style={styles.libraryItems}>
                        <Text
                            style={{ fontSize: 16 }}
                        >
                            Playlists
                        </Text>
                          <Icon name="chevron-right" size={20} />
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity
                    onPress={() => navigation.navigate('Albums')}
                >
                    <View style={styles.libraryItems}>
                        <Text
                            style={{ fontSize: 16 }}
                        >
                            Albums
                        </Text>
                          <Icon name="chevron-right" size={20} />
                    </View>
                </TouchableOpacity>
            </View>
            <Recently navigation={navigation}/>
            <ListenHistory navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    libraryItems: {
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

