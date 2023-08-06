import React from 'react';
import Arrowleft from 'react-native-vector-icons/MaterialIcons';
import {View, Text,Linking,TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Dashboard from '../Dashboard';
import VideoCamera from 'react-native-vector-icons/Ionicons';
import Iconsetting from 'react-native-vector-icons/Feather';
import Accessibility from 'react-native-vector-icons/Ionicons';
// import Hyperlink from 'react-native-hyperlink';

const Setting = () => {

  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }



  const navigation = useNavigation();


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
            color={'#fff'}
            onPress={() => navigation.navigate(Dashboard)}
          />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
              marginLeft: 105,
            }}>
            More
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            margin: 5,
            width: '85%',
            marginLeft: 25,
          }}></View>
        <Text style={{marginTop: 20, marginLeft: 50}}>SETTINGS</Text>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            margin: 5,
            width: '97%',
            marginLeft: 5,
            marginTop: 20,
          }}></View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <VideoCamera
            name="videocam-outline"
            size={25}
            color={'white'}
            style={{marginLeft: 40}}
          />
          <Text
            style={{
              marginLeft: 30,
              textAlign: 'center',
              fontSize: 15,
              color: 'white',
              fontWeight:'bold'
            }}>
            Meetings
          </Text>
          <Arrowleft
            name="arrow-forward-ios"
            size={15}
            color={'#fff'}
            style={{marginLeft: 170, marginTop: 5}}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Iconsetting
            name="settings"
            size={25}
            color={'white'}
            style={{marginLeft: 40}}
          />
          <Text
            style={{
              marginLeft: 30,
              textAlign: 'center',
              fontSize: 15,
              color: 'white',
              fontWeight:'bold'
            }}>
            General
          </Text>
          <Arrowleft
            name="arrow-forward-ios"
            size={15}
            color={'#fff'}
            style={{marginLeft: 180, marginTop: 5}}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Accessibility
            name="accessibility"
            size={25}
            color={'white'}
            style={{marginLeft: 40}}
          />
          <Text
            style={{
              marginLeft: 30,
              textAlign: 'center',
              fontSize: 15,
              color: 'white',
              fontWeight:'bold'
            }}>
           Accessibility
          </Text>
          <Arrowleft name="arrow-forward-ios"size={15} color={'#fff'} style={{marginLeft: 145, marginTop: 5}}
          />
        </View>
        <View style={{marginTop:15,borderTopColor: 'orange',borderTopWidth: 1,left:10,marginRight:20,backgroundColor:'grey',height:'52%'}}>
            <View style={{borderTopColor: 'orange',borderTopWidth: 1,top:15,}}>
              <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{alignItems:'center',fontSize:18,color:'#fff', top:5,left:15}}>Version</Text>
                <Arrowleft name="arrow-forward-ios"size={15} color={'#fff'} style={{marginLeft: 255, marginTop: 10}}/>
                </View>
                <View style={{borderBottomColor: 'orange',borderBottomWidth: 1,top:15,width:'94%',left:20,bottom:15}}></View>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{alignItems:'center',fontSize:18,color:'#fff', top:20,left:15}}>Tell Others About Meet</Text>
                <Arrowleft name="arrow-forward-ios"size={15} color={'#fff'} style={{marginLeft: 132, marginTop: 25}}/>
                </View>
                <View style={{borderBottomColor: 'orange',borderBottomWidth: 1,top:20,width:'94%',left:20,bottom:15}}></View>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{alignItems:'center',fontSize:18,color:'#fff', top:30,left:15}}>Rate Meet in the Google Play Store</Text>
                <Arrowleft name="arrow-forward-ios"size={15} color={'#fff'} style={{marginLeft: 40, marginTop:35}}/>
                </View>
                <View style={{borderBottomColor: 'orange',borderBottomWidth: 1,top:20,width:'94%',left:20,bottom:15}}></View>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{alignItems:'center',fontSize:18,color:'#fff', top:30,left:15}}>Privacy Policy</Text>
                <Arrowleft name="arrow-forward-ios"size={15} color={'#fff'} style={{marginLeft: 205, marginTop:35}}/>
                </View>
                <View style={{borderBottomColor: 'orange',borderBottomWidth: 1,top:20,width:'94%',left:20,bottom:15}}></View>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{alignItems:'center',fontSize:18,color:'#fff', top:30,left:15}}>Terms of Service</Text>
                <Arrowleft name="arrow-forward-ios"size={15} color={'#fff'} style={{marginLeft: 182, marginTop:35}}/>
                </View>
                <View style={{borderBottomColor: 'orange',borderBottomWidth: 1,top:20,width:'94%',left:20,bottom:15}}></View>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Text style={{alignItems:'center',fontSize:18,color:'#fff', top:30,left:15}}>Community Stanndards</Text>
                <Arrowleft name="arrow-forward-ios"size={15} color={'#fff'} style={{marginLeft: 129, marginTop:35}}/>
                </View>
                <View style={{borderBottomColor: 'orange',borderBottomWidth: 1,top:20,bottom:15}}></View>
                <View>
                  <TouchableWithoutFeedback onPress={() => openWebsite('https://reactnative.dev/docs/linking-libraries-ios')}>
                  <Text style={{top:30,left:15,fontSize:19,color:'blue'}}>
                  Open Source Software
                  </Text>
                  </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
      </View>
    </>
  );
};
export default Setting;
