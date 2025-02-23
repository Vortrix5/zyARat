import { Drawer } from "expo-router/drawer"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity, Text, StyleSheet, View } from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { router } from "expo-router"

function CustomDrawerContent(props) {
    const handleLogout = () => {
        console.log("Logging out...")
        router.replace("/login")
    }

    return (
        <View style={styles.drawerContainer}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollContent}>
                <View style={styles.drawerContent}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.drawerFooter}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Ionicons name="log-out-outline" size={24} color="white" />
                    <Text style={styles.logoutButtonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function Layout() {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerType: "front",
                drawerStyle: {
                    backgroundColor: "#fff",
                    width: '80%',
                    maxWidth: 300,
                },
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                    drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="profile"
                options={{
                    drawerLabel: "Profile",
                    title: "Profile",
                    drawerIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="settings"
                options={{
                    drawerLabel: "Settings",
                    title: "Settings",
                    drawerIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
                }}
            />
        </Drawer>
    )
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    drawerContent: {
        flex: 1,
    },
    drawerFooter: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        padding: 16,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FF3B30",
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
    },
    logoutButtonText: {
        color: "white",
        fontSize: 16,
        marginLeft: 8,
    },
})

