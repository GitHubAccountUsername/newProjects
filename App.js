import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InboxScreen from './inboxScreen';
import NewMessageScreen from './newMessageScreen';

import MessagesDetails from './messagesDetails';
import Login from './login';



export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="تسجيل الدخول" component={Login} />
        <Stack.Screen name="البريد الوارد" component={InboxScreen} />
        <Stack.Screen name="New Message" component={NewMessageScreen} />
        <Stack.Screen name="Details" component={MessagesDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
