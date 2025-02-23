import { View, Text, StyleSheet } from "react-native"

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>This is a default page.</Text>
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

