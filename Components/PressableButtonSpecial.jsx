import { Text, Pressable, StyleSheet } from 'react-native';

export function PressableButtonSpecial({height, width, color, funcion}) {
    return(
        <Pressable style={styles.pressable} onPress={funcion}>
            <Text style={styles.text}>Holi</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "#31d3a2",
        height: 30,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
    },
    text: {
        fontSize: 25,
    }
})