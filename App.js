import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import CoursesInformation from "./src/screens/CoursesInformationScreen";
import CoursesInformationScreen from "./src/screens/CoursesInformationScreen";
import CounterScreen from "./src/screens/CounterScreen";
import BoxScreen from "./src/screens/BoxScreen";
import ColorChangeScreen from "./src/screens/ColorChangeScreen";
import PasswordScreen from "./src/screens/PasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen
          name="CoursesInformationScreen"
          component={CoursesInformationScreen}
        />
        <Stack.Screen name="Sayaç Ekranı" component={CounterScreen} />
        <Stack.Screen name="Kutu Uygulaması" component={BoxScreen} />

        <Stack.Screen name="Şifre Ekranı" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
