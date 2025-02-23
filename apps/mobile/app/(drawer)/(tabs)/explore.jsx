import { View, Text, StyleSheet } from "react-native"

export default function Explore() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore</Text>
            <Text>Discover museums, historical sites, and cultural attractions.</Text>
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

