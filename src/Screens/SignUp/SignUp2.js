import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Arrowleft from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const SignUp2 = () => {
  const navigation = useNavigation();

  const PreviousPage = () => {
    navigation.navigate('SignUp');
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
            SignUp
          </Text>
        </View>
        <Text style={{marginTop: 20, marginLeft: 20}}>ENTER YOUR EMAIL ADDRESS</Text>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginTop: 13,
            borderTopColor: '#696969',
            borderBottomColor: '#696969',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#fff',
            }}
            placeholder="Email"
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
          Continue
        </Text>
        <Text style={{margin: 10, fontSize: 13, fontWeight: '600'}}>
         By proceeding, I agree to the Meet's Privacy Statement and Terms of Service.
        </Text>
      </View>
    </>
  );
};

export default SignUp2;
