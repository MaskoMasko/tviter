import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Login } from "../coponents/Login";
import { Register } from "../coponents/Register";
import { C } from "../../constants";
import useAuth from "~/hooks/useAuth";

export const AuthScreen = () => {
  const auth = useAuth();
  return (
    <View style={styles.authContainer}>
      {!auth.isLoggedIn ? <Login /> : <Register />}
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
