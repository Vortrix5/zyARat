import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthProvider from "../providers/AuthProvider";
import Home from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUp";


const Stack = createNativeStackNavigator();


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Sign Up">
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}