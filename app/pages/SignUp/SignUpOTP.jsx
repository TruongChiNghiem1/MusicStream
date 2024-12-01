import react, {useState} from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Modal,
    StyleSheet,
    Pressable,
    TextInput
} from 'react-native';
import {Image} from 'react-native';
import UIInput from '../../components/UIInput';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {url} from '../../components/url';
import Icon from "react-native-vector-icons/FontAwesome5";

function SignUpOTP({ route }) {
  const navigation = useNavigation();
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { email } = route.params;
    const imgBackground = require("../../../assets/images/welcome/login_bg.png")
    const imgLogo = require("../../../assets/images/logo/logo.png")
  const onSubmitHandler = async() => {
    try {
      const res = await axios.post(`${url}/user/auth-mail`, { otp: otp, email: email })
      if (res.data.status !== 200) {
        setMessage(res.data.message);
        setModalVisible(true)
      } else {
        setMessage(res.data.message);
        navigation.navigate('SignUpProfile', {token: res.data.token});
      }
    } catch (error) {
      setModalVisible(true)
      console.log(error);
    }
  }
  return (
    <View
      style={{
        flex: 1,
      }}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            { Array.isArray(message) ?
                message.map(mes => <Text style={styles.modalText}>{mes}</Text>) :
                <Text style={styles.modalText}>{message}</Text>
            }
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ImageBackground
        source={imgBackground}
        style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        }}>
          <View style={styles.overlay} />
          <View
              style={{
                  marginTop: 50,
                  marginLeft: 20,
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'flex-start'
              }}
          >
              <TouchableOpacity
                  style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                  }}
                  onPress={() => navigation.navigate('SignUpEmail')}>
                  <Icon style={{
                      marginRight: 10
                  }} name="chevron-left" size={20} />
              </TouchableOpacity>

          </View>
        <View
          style={{
            marginTop: 170,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={imgLogo}
            style={{
              width: 200,
              height: 200,
            }}></Image>
          
          <View
            style={{
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#44C1C6',
                marginLeft: 13,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Your OTP you recieved in email
            </Text>
              <TextInput
                  onChangeText={setOTP}
                  placeholder="Input your OTP"
                  style={{
                      height: 40,
                      width: 300,
                      margin: 12,
                      borderWidth: 1,
                      padding: 10,
                      borderRadius: 12,
                      borderColor: '#ffffff',
                      paddingLeft: 20
                  }}
                  placeholderTextColor='#ffffff'
              />
          </View>
          <TouchableOpacity
            onPress={onSubmitHandler}
            style={{
              width: 110,
              height: 40,
              backgroundColor: '#F49300',
              borderRadius: 100,
              marginTop: 20,
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
            title="Login">
            <View
              style={{
                width: 63,
                height: 65,
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  width: 100,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 18,
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 30,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
              }}>
              You have an account ?{' '}
            </Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={{
                color: '#F49300',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Log in
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    color: 'red',
    textAlign: 'center',
  },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
});

export default SignUpOTP;
