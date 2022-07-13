import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { C } from "~/constants";
import useAuth from "~/hooks/useAuth";
import { AuthContainerProps } from "./AuthContainer";

export const SubmitFormButton = ({ type }: AuthContainerProps) => {
  const navigation = useNavigation() as any;
  const { login, register } = useAuth();
  const isLogin = type === "login";
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        width: "80%",
        backgroundColor: C.darkGreen,
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
      }}
      onPress={async () => {
        let res: any;
        if (isLogin) {
          res = await login();
        } else {
          res = await register();
        }
        if (typeof res === "string") {
          navigation.navigate("Posts");
        } else throw new Error("Login failed!");
      }}
    >
      <Text
        style={{
          color: "whitesmoke",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {isLogin ? "LOGIN" : "REGISTER"}
      </Text>
    </TouchableOpacity>
  );
};
