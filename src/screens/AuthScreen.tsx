import React from "react";
import { StyleSheet, View } from "react-native";
import { AuthContainer } from "~/components/auth/AuthContainer";
import useAuth from "~/hooks/useAuth";
import { C } from "../constants";

export const AuthScreen = () => {
  const auth = useAuth();
  return (
    <View style={styles.authContainer}>
      {auth.hasAcc ? (
        <AuthContainer type="login" />
      ) : (
        <AuthContainer type="register" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: C.lightGreen,
    justifyContent: "center",
    alignItems: "center",
  },
});
