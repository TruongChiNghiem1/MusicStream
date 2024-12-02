import {ScrollView, Text, View} from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../layouts/header";
import {TabBar} from "@ant-design/react-native";
import {useState} from "react";
import Home from "./home";
import Search from "./search";
import Feed from "./feed";
import Library from "./Library/Library";
import Chatbot from "./Chatbot";

export default function Main({navigation}) {
    const [state, setState] = useState({
        selectedTab: 'home',
    })

    let onChangeTab = (tabName) => {
        setState({
            selectedTab: tabName,
        })
    }

    return (
        <View style={{
            backgroundColor: 'white',
            flex: 1,
        }}>
            <Header/>

            <TabBar
                unselectedTintColor="#949494"
                tintColor="#ff5400"
                barTintColor="#f5f5f5">
                <TabBar.Item
                    title="Home"
                    icon={<Icon name="home" />}
                    selected={state.selectedTab === 'home'}
                    onPress={() => onChangeTab('home')}>
                    <Home navigation={navigation}/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="search" />}
                    title="Search"
                    selected={state.selectedTab === 'search'}
                    onPress={() => onChangeTab('search')}>
                    <Search navigation={navigation}/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="newspaper" />}
                    title="Feed"
                    selected={state.selectedTab === 'feed'}
                    onPress={() => onChangeTab('feed')}>
                    <Feed navigation={navigation}/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="book" />}
                    title="Library"
                    selected={state.selectedTab === 'library'}
                    onPress={() => onChangeTab('library')}>
                    <Library navigation={navigation}/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="chat" />}
                    title="Chatbot"
                    selected={state.selectedTab === 'Chatbot'}
                    onPress={() => onChangeTab('Chatbot')}>
                    <Chatbot navigation={navigation}/>
                </TabBar.Item>
            </TabBar>

        </View>

    )
}