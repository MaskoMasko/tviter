import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import useAuth from "../hooks/useAuth";

export const Reigster = ({ setNoAccount }: any) => {
  const { userInfo, setUserInfo } = useAuth();
  const [confirmPass, setConfirmPass] = useState("");
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
      <Text>Confirm Password</Text>
      <TextInput value={confirmPass} onChangeText={setConfirmPass} />
      <Text onPress={() => setNoAccount(false)}>Alreadz have acc... Login</Text>
      <Button
        title="Register"
        onPress={() => {
          if (userInfo?.password === confirmPass) {
            console.log(userInfo);
          }
          //   else throw new Error("passwords are not the same");
        }}
      />
    </View>
  );
};
