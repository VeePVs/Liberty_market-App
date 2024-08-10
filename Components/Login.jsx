import React, {useEffect} from 'react';
import {SafeAreaView, Pressable, StyleSheet, Text, StatusBar, Button, TextInput} from "react-native";

export function Login({navigation}) {
    const [user, setUser] = React.useState()
    const [password, setPassword] = React.useState()
    const [colorUser, setColorUser] = React.useState('#b8b1b1')
    const [colorPassword, setColorPassword] = React.useState('#b8b1b1')
    const regularExpressionEmail = "[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\\.[A-Za-z]{2,}";

    useEffect(() => {
        if (user && !user.match(regularExpressionEmail)){
            setColorUser("#e60d0d");
        } else{
            setColorUser("#b8b1b1")
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#444" barStyle={"light-content"}/>
            <Text style={styles.title}>Inicio de sesión</Text>
            <TextInput style={[styles.input,{
                borderColor: colorUser
            }]} value={user}  onChangeText={text => setUser(text)} placeholder="Ingresa tu correo electrónico" maxLength={50}/>
            <TextInput style={[styles.input,{
                borderColor: colorPassword,
            }]} value={password} onChangeText={text => setPassword(text)} placeholder="Ingresa tu contraseña" maxLength={30} secureTextEntry={true}/>
            <Pressable onPress={()=> {navigation.navigate('Forgot Credentials')}}
                children={({ pressed }) => (
                    <Text style={{ color: pressed ? '#222' : '#9381FF'}}>
                        ¿Olvidaste tu usuario o contraseña?
                    </Text>
                )}/>
            <Button title="Continuar" color={"#9381FF"} />
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
    link: {
        color: "#9381FF"
    },
    input:{
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
