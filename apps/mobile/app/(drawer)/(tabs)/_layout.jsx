import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function TabsLayout() {
    const navigation = useNavigation()

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                headerBackVisible: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="tickets"
                options={{
                    title: "Tickets",
                    tabBarIcon: ({ color, size }) => <Ionicons name="ticket" size={size} color={color} />,
                }}
            />
        </Tabs>
    )
}

