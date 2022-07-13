import React from "react";
import { View, StyleSheet, Text } from "react-native";
import useAuth from "~/hooks/useAuth";
import { FormInput } from "./FormInput";
import { SubmitFormButton } from "./SubmitFormButton";

export interface AuthContainerProps {
  type: "login" | "register";
}

export const AuthContainer = ({ type }: AuthContainerProps) => {
  const { setHasAcc } = useAuth();
  const isLogin = type === "login";
  return (
    <View
      style={{
        backgroundColor: "whitesmoke",
        width: " 75%",
        height: isLogin ? 400 : 500,
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        {isLogin ? "Sign in" : "Sign Up"}
      </Text>
      <FormInput title="email" type="email" />
      <FormInput title="password" type="password" />
      {!isLogin && (
        <FormInput title="password confirmation" type="password_confirmation" />
      )}
      <View
        style={{
          width: "80%",
          alignItems: "flex-end",
          marginTop: -30,
        }}
      >
        <Text
          onPress={() => {
            if (isLogin) setHasAcc(false);
            else setHasAcc(true);
          }}
          style={{ textDecorationLine: "underline" }}
        >
          {isLogin ? "Login" : "Register"}
        </Text>
      </View>
      <SubmitFormButton type={type} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "whitesmoke",
    width: " 75%",
    height: 500,
    borderRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
