import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar, Button, TextInput, Form} from "react-native";
import {Home} from "./Components/Home";


export default function App() {
    const [usuario, setUsuario] = React.useState()
    const [contraseña, setContraseña] = React.useState()

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar backgroundColor="#444" barStyle={"light-content"}/>
            <Text style={styles.title}>Inicio de sesión</Text>
            <TextInput style={styles.input} value={usuario} onChange={setUsuario} placeholder="Ingresa tu usuario" maxLength={15}/>
            <TextInput style={styles.input} value={contraseña} onChange={setContraseña} placeholder="Ingresa tu usuario" maxLength={30} secureTextEntry={true}/>

        </SafeAreaView>
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