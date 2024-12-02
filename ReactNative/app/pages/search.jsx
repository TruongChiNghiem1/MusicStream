import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Tabs } from '@ant-design/react-native';
import imgShape from "../../assets/images/chart_detail/Image 23.png";
import Icon from "react-native-vector-icons/FontAwesome5";
import imgDot from "../../assets/images/chart_detail/dot.png";
import axios from 'axios'; // Thêm axios để gọi API
import {url} from '../components/url';
export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [musicSuggestions, setMusicSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const tabs = [
        { title: 'All' },
        { title: 'Tracks' },
        { title: 'Albums' },
        { title: 'Artists' },
    ];

    const style = {
        height: 150,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    };

    const handleSearch = async () => {
        setLoading(true);
        console.log('aaaaaaaaaaa')
        try {
            const res = await axios.get(`${url}/home/songs`, { params: { query: searchQuery } }); // Gọi API tìm kiếm
            console.log(res.data)
            setMusicSuggestions(res.data);
        } catch (error) {
            console.log('Error: ', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (searchQuery.length > 0) {
            handleSearch();
        } else {
            setMusicSuggestions([]); // Xóa kết quả khi không có truy vấn
        }
    }, [searchQuery]);

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderRadius: 50,
                    height: 40,
                    fontSize: 18,
                    paddingLeft: 18,
                    marginBottom: 20,
                }}
                placeholder='Search...'
                value={searchQuery}
                onChangeText={setSearchQuery} // Cập nhật truy vấn tìm kiếm
            />
            <Tabs tabs={tabs}>
                <View style={style}>
                    {loading ? (
                        <View>
                        </View>
                    ) : (
                        musicSuggestions.map((song, index) => (
                            <View key={index} style={{ marginBottom: 12 }}>
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
                                        }} source={{ uri: song.image }} /> {/* Hình ảnh bài hát */}
                                        <View style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>

                                        </View>
                                    </View>
                                    <Icon style={{
                                        marginRight: 10,
                                        color: '#888888',
                                    }} name="ellipsis-h" size={18} />
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </View>
                <View style={style}>
                </View>
                <View style={style}>
                </View>
            </Tabs>
        </View>
    );
}
