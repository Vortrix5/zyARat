import { View, Text, StyleSheet } from "react-native"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Page</Text>
            <Text>This is where you can display your main content.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
})

