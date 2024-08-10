import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from "react-native";
import dayjs from 'dayjs';
import DateTimePicker from "react-native-ui-datepicker/src/DateTimePicker";

export function Register() {
    const [date, setDate] = React.useState(dayjs());

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Registro de usuario</Text>
            <TextInput placeholder="Nombres"/>
            <TextInput placeholder="Apellidos"/>
            <DateTimePicker
                mode="single"
                date={date}
                onChange={(params) => setDate(params.date)}
            />
            <TextInput placeholder="Dirección"/>
            <TextInput placeholder="Fecha de nacimiento" />
            <TextInput placeholder="Nombre completo"/>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F7FF",
        alignItems: "center",
        gap:10,
        paddingHorizontal: 12,
    },
    title: {
        marginTop: 20,
        marginBottom: 30,
        fontSize: 30,
        color: "#2b2b2b",
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
