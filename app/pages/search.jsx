import {ScrollView, Text, View} from "react-native";
import * as React from "react";
import { Tabs } from '@ant-design/react-native'

export default function Search () {
    const tabs = [
        { title: 'All' },
        { title: 'Tracks' },
        { title: 'Albums' },
        { title: 'Artists' },
    ]

    const style = {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#fff',
    }
    return (
        <View style={{ flex: 1 }}>
            <Tabs tabs={tabs}>
                <View style={style}>
                    <Text>Content of First Tab</Text>
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