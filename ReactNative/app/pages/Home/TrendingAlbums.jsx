import React, {useEffect, useState} from "react";
import {Image, Text, View} from "react-native";
import imgTrending from "../../../assets/images/home/Image 16.png";
import Carousel from "react-native-reanimated-carousel";
import {getAlbums} from "../../service/service";

const TrendingAlbums = () =>{
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)

    const handleGetAlbums = async () =>{
        try {
            const res = await getAlbums()
            setAlbums(res.data)
            setLoading(false)
        }catch (e){
            console.log('Error: ', e.message)
        }
    }

    useEffect(() => {
        handleGetAlbums()
    }, []);

    return(
        <View>
            {loading ? (
                <Text>Loading ...</Text>
            ) : (
                <Carousel
                    vertical={false}
                    width={160}
                    height={170}
                    autoPlay={false}
                    data={albums}
                    scrollAnimationDuration={1000}
                    pagingEnabled={true}
                    style={{
                        overflow: 'visible',
                    }}
                    renderItem={({ item: album }) => (
                        <View
                            style={{
                                width: 160,
                            }}
                        >
                            <Image style={{
                                width: 136,
                                height: 136,
                                borderRadius: 5
                            }}  source={{ uri: album?.image }} />
                            <Text style={{
                                color: 'rgba(43,43,43,0.75)',
                                fontSize: 17,
                                fontWeight: 'bold',
                                marginTop: 5
                            }}>{album.title}</Text>
                            <Text style={{
                                color: 'rgba(126,126,126,0.48)',
                                fontSize: 17,
                            }}>{album.artist}</Text>
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
            )}
        </View>
    )
}

export default TrendingAlbums