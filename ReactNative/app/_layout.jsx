import * as React from 'react';
import {View,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/welcome';
import Login from './pages/login';
import ListOfAlbum from './pages/MusicList/ListOfAlbum';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Main from "./pages/main";
import Play from "./pages/PlayMusic/Play";
import PlayList from "./pages/playList";
import '../app/scss/app.scss';
import DetailPopularArtistsDetail from "./pages/detailPopularArtistsDetail";
import LikeTrack from './pages/Library/LikedTrack';
import ListenHistory from './pages/Library/ListenHistory';
import Recently from './pages/Library/Recenttly';
import Albums from './pages/Library/Albums';
import SignUpEmail from "./pages/SignUp/SignUpEmail";
import SignUpOTP from "./pages/SignUp/SignUpOTP";
import SignUpProfile from "./pages/SignUp/SignUpProfile";

const Stack = createNativeStackNavigator();
export default function RootLayout() {
    return (
      <NavigationContainer independent={true}>
          <Stack.Navigator>
              <Stack.Screen
                  name="Welcome"
                  component={Welcome}
                  options={{
                      headerShown: false,
                  }}
              />
              <Stack.Screen
                  name="Login"
                  component={Login}
                  options={({ navigation }) => ({
                      headerTitle: () => null,
                      headerLeft: () => (
                          <View>
                             
                          </View>
                      ),
                    headerShadowVisible: false, 
                    headerShown: false
                  })}
              />
              <Stack.Screen
                  name="Main"
                  component={Main}
                  options={({ navigation }) => ({
                      headerShown: false,
                  })}
              />
              <Stack.Screen
                  name="ListOfAlbum"
                  component={ListOfAlbum}
                  options={({ navigation }) => ({
                      headerTitle: () => null,
                      headerLeft: () => (
                          <View>
                              <TouchableOpacity
                                  style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                  }}
                                  onPress={() => navigation.navigate('Main')}>
                                  <Icon style={{
                                      marginRight: 10,
                                      color: '#888888',
                                  }} name="chevron-left" size={20} />
                              </TouchableOpacity>
                          </View>
                      ),
                      headerRight: () => (
                          <View>
                              <TouchableOpacity
                                  style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                  }}
                                  onPress={() => navigation.navigate('Main')}>
                                  <Icon style={{
                                      marginRight: 10,
                                      color: '#888888',
                                  }} name="chromecast" size={20} />
                              </TouchableOpacity>
                          </View>
                      )
                  })}
              />
              <Stack.Screen
                  name="Play"
                  component={Play}
                  options={({ navigation }) => ({
                      headerShown: false
                  })}
              />
              <Stack.Screen
                  name="playList"
                  component={PlayList}
                  options={({ navigation }) => ({
                  })}
              />
              <Stack.Screen
                  name="DetailPopularArtistsDetail"
                  component={DetailPopularArtistsDetail}
                  options={({ navigation }) => ({
                  })}
              />

                <Stack.Screen
                  name="LikeTrack"
                  component={LikeTrack}
                  options={({ navigation }) => ({
                  })}
              />
                <Stack.Screen
                  name="ListenHistory"
                  component={ListenHistory}
                  options={({ navigation }) => ({
                  })}
              />

                <Stack.Screen
                  name="Playlist"
                  component={PlayList}
                  options={({ navigation }) => ({
                  })}
              />
              
                <Stack.Screen
                  name="Recently"
                  component={Recently}
                  options={({ navigation }) => ({
                  })}
              />

                <Stack.Screen
                  name="Albums"
                  component={Albums}
                  options={({ navigation }) => ({
                  })}
              />
              <Stack.Screen name="SignUpEmail" component={SignUpEmail}
                            options={({ navigation }) => ({
                                headerTitle: () => null,
                                headerLeft: () => (
                                    <View>

                                    </View>
                                ),
                                headerShadowVisible: false,
                                headerShown: false
                            })}
                />
              <Stack.Screen name="SignUpOTP" component={SignUpOTP}
                            options={({ navigation }) => ({
                                headerTitle: () => null,
                                headerLeft: () => (
                                    <View>

                                    </View>
                                ),
                                headerShadowVisible: false,
                                headerShown: false
                            })}
              />
              <Stack.Screen name="SignUpProfile" component={SignUpProfile}
                            options={({ navigation }) => ({
                                headerTitle: () => null,
                                headerLeft: () => (
                                    <View>

                                    </View>
                                ),
                                headerShadowVisible: false,
                                headerShown: false
                            })}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
