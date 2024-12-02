import React, {useEffect, useState} from "react";
import {Image, Text, View} from "react-native";
import imgSuggestions from "../../../assets/images/home/Image 8.png";
import Carousel from "react-native-reanimated-carousel";
import {getAlbums} from "../../service/service";

const Suggestions = ({ navigation }) => {
    const [musicSuggest, setMusicSuggestions] = useState([])
    const handleGetAlbums = async () => {
        console.log('call api')
        try {
            const res = await getAlbums()
            console.log('Data', res.data)

        }catch (e){
            console.log('Error: ', e.message);
        }
    }

    useEffect(() => {
        handleGetAlbums()
    }, []);

    return (
        <Carousel
            vertical={false}
            width={260}
            height={320}
            autoPlay={false}
            data={musicSuggest}
            scrollAnimationDuration={1000}
            pagingEnabled={true}
            style={{
                overflow: 'visible',
                backgroundColor: 'red'
            }}
            renderItem={({ item }) => (
                <View
                    style={{
                        width: 200,
                    }}
                >
                    <Image style={{
                        width: 235,
                        height: 320,
                        borderRadius: 5
                    }} source={imgSuggestions} />
                    <View style={{
                        position: 'absolute',
                        top: 230,
                        backgroundColor: 'rgba(0,0,0,0.42)',
                        width: 235,
                        height: 90
                    }}>
                        <Text style={{
                            fontSize: 23,
                            color: 'white',
                            marginTop: 15,
                            marginLeft:20,
                            fontWeight: 'bold',
                        }}>Reflection</Text>
                        <Text style={{
                            fontSize: 20,
                            color: 'white',
                            marginTop: 5,
                            marginLeft: 20,
                        }}>Christina Aguilera</Text>
                    </View>
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
    )
}

export default Suggestions