import React,{useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import Arrowleft from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {

    const [birthYear, setBirthYear] = useState('');
    const [isValid, setIsValid] = useState(false);
  
    const handleBirthYearChange = (year) => {
      setBirthYear(year);
      setIsValid(year.length === 4); 
    };

    const handleContinue = () => {
        if (isValid) {
         navigation.navigate("SignUp2")
        } else {
          // Display an error message or perform any other action when the birth year is not valid
          console.log('Please enter a valid birth year.');
        }
      };





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
            SignUp
          </Text>
        </View>
        <Text style={{marginTop: 20, marginLeft: 20}}>VERIFY YOUR AGE</Text>
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
            placeholder="Birth Year"
            keyboardType="numeric"
            value={birthYear}
            onChangeText={(text) => handleBirthYearChange(text)}
          />
        </View>
        <Text style={{margin: 10, fontSize: 13, fontWeight: '600'}}>
          Please confirm your birth year. This data will not be stored
        </Text>
        <Text
          style={{
            textAlign: 'center',
            borderWidth: 1,
            margin: 20,
            borderRadius: 10,
            padding: 10,
            fontWeight: 'bold',
            borderColor: 'grey',
            backgroundColor: isValid ? 'lightblue' : '#696969',
            marginBottom: 0,
            color: 'darkgrey',
          }}onPress={handleContinue}
          disabled={!isValid}>
          Continue
        </Text>
      </View>
    </>
  );
};

export default SignUp;
