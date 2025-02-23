import { View, Text, StyleSheet } from "react-native"

export default function Tickets() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Tickets</Text>
            <Text>View and manage your purchased tickets here.</Text>
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

