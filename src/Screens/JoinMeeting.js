import React,{useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Arrowleft from 'react-native-vector-icons/MaterialIcons';
import Toggleon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';


const JoinMeeting = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const navigation = useNavigation();

  const PreviousPage = () => {
    navigation.navigate("Dashboard");
  };


  const toggleIcon1 = () => {
    setIsEnabled1(!isEnabled1);
  };

  const toggleIcon2 = () => {
    setIsEnabled2(!isEnabled2);
  };


  return (

    <>
      <View style={{flex: 1, backgroundColor: '#373737'}}>
        <View
          style={{
            marginVertical: 10,
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 20,
          }}>
          <Arrowleft name="arrow-back-ios" size={30} color={'#4971E9'} onPress={PreviousPage} />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
              marginLeft: 70,
            }}>
            Join a Meeting
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginTop: 10,
            backgroundColor: '#555555',
            borderTopColor: '#696969',
            borderBottomColor: '#696969',
          }}>
          <TextInput placeholder="Meeting ID" style={{textAlign: 'center'}} />
        </View>
        <Text style={{textAlign: 'center', margin: 20, color: '#4971E9'}}>
          Join with a personal link name
        </Text>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginTop: 2,
            backgroundColor: '#555555',
            borderTopColor: '#696969',
            borderBottomColor: '#696969',
          }}>
          <TextInput
            placeholder="Your Name"
            defaultValue="realme XT"
            style={{textAlign: 'center'}}
          />
        </View>
        <Text style={{marginLeft:10,fontSize:14,marginRight:10,marginTop:5}}>
          By clicking "join",you agree to our Terms of Service and Privacy
          Statement
        </Text>
        <Text
          style={{
            textAlign: 'center',
            borderWidth: 1,
            margin: 20,
            borderRadius: 10,
            padding:10,
            fontWeight:'bold',
            borderColor:'grey',
            backgroundColor:'#555555',
            marginBottom:0,
            color:'darkgrey'
          }}>
          Join
        </Text>
        <Text style={{marginLeft:10,fontSize:14,marginRight:10,marginTop:10}}>If you received an invitation link, tap on the link to join the meeting  </Text>
        <Text style={{marginTop:40,left:20,fontWeight:'700',marginBottom:5}}>JOIN OPTIONS</Text>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth:1,
            marginTop: 10,
            backgroundColor: '#555555',
            borderTopColor: '#696969',
            borderBottomColor: '#696969',
            padding:5,
            marginTop:0,
            justifyContent:'center'
          }}>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{left:5,bottom:5,fontSize:15,fontWeight:'bold',top:15}}>Don't Connect To Audio</Text>
          <Toggleon name={isEnabled1 ? 'toggle-on' : 'toggle-off'} size={40} onPress={toggleIcon1}  color={isEnabled1 ? 'lightblue' : 'white'} />
          </View> 
          <View style={{borderBottomColor: 'grey',borderBottomWidth:1,margin:5,width:"120%",}}></View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{left:5,top:5,fontSize:15,fontWeight:'bold',}}>Turn Off My Video</Text>
          <Toggleon name={isEnabled2 ? 'toggle-on' : 'toggle-off'} size={40} onPress={toggleIcon2} color={isEnabled2 ? 'lightblue' : 'white'}/>
          </View>
        </View>
      </View>
    </>
  );
};

export default JoinMeeting;
