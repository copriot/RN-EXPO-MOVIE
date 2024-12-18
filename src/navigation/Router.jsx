import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import SearchScreen from "../screens/SearchScreen";
import PersonScreen from "../screens/PersonScreen";
const Router = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Movie"
        options={{ headerShown: false }}
        component={MovieScreen}
      />
      <Stack.Screen
        name="Person"
        options={{ headerShown: false }}
        component={PersonScreen}
      />
      <Stack.Screen
        name="Search"
        options={{ headerShown: false }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
