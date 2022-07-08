import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { BASE_URL } from "../../constants";
import useAuth from "../hooks/useAuth";

export const Login = ({ setNoAccount }: any) => {
  const navigation = useNavigation() as any;

  const { userInfo, setUserInfo } = useAuth();

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
        onPress={() => {
          console.log("nisto");
        }}
      />
    </View>
  );
};
