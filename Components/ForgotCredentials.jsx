import React from 'react';
import {Button, SafeAreaView, Text, TextInput, StyleSheet} from "react-native";

export function ForgotCredentials() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>¿Olvidaste tu contraseña o usuario?</Text>
            <TextInput style={styles.input} placeholder="Ingresa tu correo electrónico"/>
            <Button color="#9381FF" title="Continuar"/>
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
        textAlign: "center",
        fontWeight: "bold",
    },
    input:{
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
