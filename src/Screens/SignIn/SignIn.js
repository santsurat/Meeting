import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Arrowleft from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();

  const PreviousPage = () => {
    navigation.navigate('Dashboard');
  };
  return (
    <>
      <View style={{backgroundColor: '#373737', flex: 1}}>
        <View
          style={{
            marginVertical: 10,
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 20,
          }}>
          <Arrowleft
            name="arrow-back-ios"
            size={30}
            color={'#4971E9'}
            onPress={PreviousPage}
          />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
              marginLeft: 100,
            }}>
            Sign In
          </Text>
        </View>
        <Text style={{marginTop: 20, marginLeft: 20,marginBottom:0}}>ENTER YOUR EMAIL ADDRESS</Text>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginTop: 6,
            borderTopColor: '#696969',
            borderBottomColor: '#696969',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              fontSize: 15,
              textAlign: 'center',
              color: '#fff',
            }}
            placeholder="Email"
          />
          <View style={{borderBottomColor: 'grey',borderBottomWidth:1,margin:5,width:"100%",}}></View>
           <TextInput
            style={{
              fontSize: 15,
              textAlign: 'center',
              color: '#fff',
            }}
            placeholder="Password"
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            borderWidth: 1,
            margin: 20,
            borderRadius: 10,
            padding: 10,
            fontWeight: 'bold',
            borderColor: 'grey',
            backgroundColor: '#555555',
            marginBottom: 0,
            color: 'darkgrey',
          }}>
          Sign In
        </Text>
        <Text style={{margin: 20, fontSize: 13, fontWeight: '600'}}>
        Forgot Password?
        </Text>
      </View>
    </>
  );
};

export default SignIn;
