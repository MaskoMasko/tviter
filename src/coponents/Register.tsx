import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import useAuth from "../hooks/useAuth";

export const Reigster = ({ setNoAccount }: any) => {
  const { userInfo, setUserInfo } = useAuth();
  const [confirmPass, setConfirmPass] = useState("");
  const { register } = useAuth();
  const navigation = useNavigation() as any;
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
        onPress={async () => {
          const res: any = await register!();
          if (typeof res === "string") {
            navigation.navigate("Posts");
          } else throw new Error("Login failed!");
        }}
      />
    </View>
  );
};
