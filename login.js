

import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';



function Login  ({navigation}) {


        return (
          
          <TouchableWithoutFeedback onPress={()=>{

            Keyboard.dismiss()
          }}> 

            <View style={styles.container}>
                <View style={styles.section1}></View>
                
                <View style={styles.section2}>
                    <View style={styles.names}>
                    <Text >اسم المستخدم</Text>
                     </View>
                    <View style={styles.inputContainer}>      
                        <TextInput
                        placeholder='اسم المستخدم'
                        />
                    </View>
                    <View style={styles.names}>
                        <Text >كلمة المرور</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            styl={styles.input}
                            placeholder='كلمة المرور'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                          title='دخول'
                          onPress={()=>navigation.navigate('البريد الوارد')}
                      />
                    </View>
                </View>
                <View style={styles.section3}></View>
            </View> 
          </TouchableWithoutFeedback>  
          );
    }
  

const styles = StyleSheet.create({
    section1: {
        flex: 2,

    },
    section2: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    section3: {
        flex: 2,
        borderWidth: 1,
        borderColor: 'black'

    },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputContainer: {
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    backgroundColor: 'white',
    padding: 8,
    margin: 8,
    width: 300,
  },
  names: {
    marginRight: 30,

  },
  buttonContainer: {
    marginRight: 30,
  }
});

export default Login