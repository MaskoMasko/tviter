import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import useAuth from "../hooks/useAuth";

export const Login = ({ setNoAccount }: any) => {
  const navigation = useNavigation() as any;

  const { userInfo, setUserInfo, login } = useAuth();

  return (
    <View>
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput
        value={userInfo?.email}
        onChangeText={(e) => setUserInfo!({ ...userInfo, email: e })}
      />
      <Text>Password</Text>
      <TextInput
        value={userInfo?.password}
        onChangeText={(e) => setUserInfo!({ ...userInfo, password: e })}
      />
      <Text onPress={() => setNoAccount(true)}>No account? Register</Text>
      <Button
        title="Login"
        onPress={async () => {
          const res: any = await login!();
          if (typeof res === "string") {
            navigation.navigate("Posts");
          } else throw new Error("Login failed!");
        }}
      />
    </View>
  );
};
