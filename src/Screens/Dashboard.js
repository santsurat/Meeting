import React from 'react';
import {View, Text, Button} from 'react-native';
import Iconsetting from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Setting from './Settings/Setting';


function Dashboard() {
  const navigation = useNavigation();

  const JoinaMeeting = () => {
    navigation.navigate("JoinMeeting");
  };
  return (
    <>
      <View
        style={{backgroundColor: '#0741ad', justifyContent: 'center', flex: 1}}>
        <View style={{marginTop: 50, marginLeft: 30}}>
          <Iconsetting name="settings" color="#fff" size={20} onPress={() => navigation.navigate(Setting)} />
        </View>
        <Text
          style={{
            color: '#fff',
            alignSelf: 'center',
            textAlignVertical: 'center',
            fontWeight: 'bold',
            fontSize: 40,
            marginBottom: 50,
            marginTop: 100,
          }}>
          MEET
        </Text>
        <View
          style={{
            backgroundColor: '#1f2022',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: '50%',
            marginBottom: 0,
            marginTop: 100,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlignVertical: 'center',
              fontSize: 25,
              marginTop: 40,
            }}>
            Welcome
          </Text>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              textAlignVertical: 'center',
              fontSize: 15,
              marginBottom: 20,
            }}>
            Get started with your account
          </Text>
          <View
            style={{
              backgroundColor: '#0741ad',
              borderRadius: 10,
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'center',
              height: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
               
              }} onPress={JoinaMeeting}>
              Join a Meeting
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#333333',
              borderRadius: 10,
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'center',
              height: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }} onPress={() => navigation.navigate(SignUp)}>
              Sign Up
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#333333',
              borderRadius: 10,
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'center',
              height: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}onPress={() => navigation.navigate(SignIn)}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default Dashboard;
