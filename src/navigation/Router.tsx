import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "../screens/AuthScreen";
import { AuthContextProvider } from "../hooks/useAuth";
import { PostsScreen } from "../screens/PostsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { TestingScreen } from "../screens/TestingScreen";

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="Testing" component={TestingScreen} /> */}
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Posts"
            component={PostsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
};
