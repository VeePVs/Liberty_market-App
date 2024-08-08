import {SafeAreaView, StyleSheet, View, Text, StatusBar, Button, TextInput} from "react-native";
import {PressableButtonSpecial} from "./Components/PressableButtonSpecial";


export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#444" barStyle={"light-content"}/>
            <Text style={styles.title}>Bienvenido</Text>
            <Button title="Iniciar sesión" color={"#9381FF"}/>
            <Button title="¿No tienes cuenta?" color={"#B8B8FF"}/>
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
    }
});
