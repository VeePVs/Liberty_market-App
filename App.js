import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar, Button, TextInput, Form} from "react-native";
import {Home} from "./Components/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Login} from "./Components/Login";
import {Register} from "./Components/Register";
import {ForgotCredentials} from "./Components/ForgotCredentials";


export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={Home}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"Register"} component={Register}/>
                <Stack.Screen name={"Forgot Credentials"} component={ForgotCredentials}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F7FF",
        alignItems: "center",
        gap:10,
        justifyContent: "center",
        paddingHorizontal: 12,
    },
    title: {
        marginBottom: 30,
        fontSize: 30,
        color: "#2b2b2b",
        fontWeight: "bold",
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
