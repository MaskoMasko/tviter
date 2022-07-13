import React from "react";
import { View, Text, TextInput } from "react-native";
import useAuth from "~/hooks/useAuth";
import { capitalizeString } from "~/utils/capitalizeString";

interface FormInputProps {
  title: string;
  type: "email" | "password" | "password_confirmation";
}

export const FormInput = ({ title, type }: FormInputProps) => {
  const { userInfo, setUserInfo } = useAuth();
  return (
    <View style={{ justifyContent: "flex-start", width: "85%", height: 75 }}>
      <Text>{capitalizeString(title)}</Text>
      <TextInput
        style={{
          backgroundColor: "whitesmoke",
          borderRadius: 5,
          paddingLeft: 10,
          height: 40,
          borderColor: "lightgray",
          marginTop: 5,
          borderWidth: 1,
        }}
        value={userInfo[`${type}`]}
        onChangeText={(e) => {
          setUserInfo!({ ...userInfo, [`${type}`]: e });
        }}
      />
    </View>
  );
};
