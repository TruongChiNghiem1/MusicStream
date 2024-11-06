import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/welcome';
import Login from './pages/login';
import Home from './pages/home';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
                  name="Home"
                  component={Home}
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
                                  onPress={() => navigation.navigate('Login')}>
                                  <Icon style={{
                                      marginRight: 10
                                  }} name="chevron-left" size={20} />
                                  <Text style={{
                                      fontWeight: 'bold',
                                      fontSize: 20
                                  }}>Electronics</Text>
                              </TouchableOpacity>
                          </View>
                      ),
                      headerRight: () => (
                          <View style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                          }}>
                              <Icon style={{
                                  marginRight: 10
                              }} name="car" size={20} />
                          </View>
                      )
                  })}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
