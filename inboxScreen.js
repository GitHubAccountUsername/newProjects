import react, {useState} from "react";
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "./shared/card";
import { AntDesign } from '@expo/vector-icons';
import NewMessageScreen from "./newMessageScreen";




export default function InboxScreen ( route) { 

    const [modalOpen, setModalOpen] = useState (false);

    const navigation = useNavigation ();

    const [messages, setMessages] = useState([
        
      ]);

      const addMessage = (message) => {
        message.key = Math.random().toString();
        setMessages((currenMessages) => {
            return [message, ...currenMessages];
        });
        setModalOpen(false);
      }

        return (

            

        <View style={styles.container}>


            <Modal visible={modalOpen} animationType={"slide"}>
                <View style={styles.modalContent}></View>
                <NewMessageScreen addMessage={addMessage} />
                <TouchableOpacity onPress={() => {setModalOpen(false)}}>
                <AntDesign 
                style={{ ...styles.modalToggle,...styles.modalClose }} 
                name="closecircle" 
                size={35} color="green" />
                </TouchableOpacity>
                
            </Modal>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        <Card>
                            <Text style={styles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />  
            <TouchableOpacity onPress={() => {setModalOpen(true)}}>
            <AntDesign 
            style={styles.modalToggle} 
            name="pluscircle" size={35} 
            color="green" />
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        padding: 20, 
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    modalContent: {
        flex: 1,

    },
    modalToggle: {
        alignSelf: 'flex-end'
    },
    modalClose: {
        alignSelf: 'flex-end',
        margin: 20,

    }
})