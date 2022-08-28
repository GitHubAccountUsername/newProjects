import react, {useState} from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

export default function NewMessageScreen  ({ addMessage }) {      
    
    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }} >
        <View style={styles.container}>
            <Formik
            initialValues={{title: '', body: ''}}
            onSubmit = {(values) => {
                addMessage(values)
                

            }}
            >
                {(props) => (
                    <View>
                        <TextInput
                        style={styles.input}
                        placeholder='العنوان'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        />

                        <TextInput
                        style={styles.input}
                        placeholder='الموضوع'
                        numberOfLines={5}
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        />

                        <Button title="ارسل" onPress={props.handleSubmit}/>
                    </View>
                )}

            </Formik>

        </View>
 
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        padding: 20, 
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
      },
})