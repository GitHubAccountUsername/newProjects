import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "./shared/card";



export default function MessagesDetails ({ route }) {
    const { title, body } = route.params;
    return (
        <View style={styles.container}>
            <Card>
            <Text >{ route.params.title }</Text>
            <Text >{  route.params.body }</Text>
            </Card>
            
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,

    
    }
})