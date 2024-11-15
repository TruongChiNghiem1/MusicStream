import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/welcome';
import Login from './pages/login';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Main from "./pages/main";

const Stack = createNativeStackNavigator();
const imgAvtHome = require('../assets/images/home/Avatar 1.png')
const imgLogo = require("../assets/images/Image 7.png")
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
                              <TouchableOpacity
                                  style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                  }}
                                  onPress={() => navigation.navigate('Welcome')}>
                                  <Icon style={{
                                      marginRight: 10
                                  }} name="chevron-left" size={20} />
                              </TouchableOpacity>
                          </View>
                      )
                  })}
              />
              <Stack.Screen
                  name="Main"
                  component={Main}
                  options={({ navigation }) => ({
                      headerShown: false,
                  })}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
