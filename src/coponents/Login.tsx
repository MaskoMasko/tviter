import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { C } from "../../constants";
import useAuth from "../hooks/useAuth";

export const Login = () => {
  const navigation = useNavigation() as any;

  const { userInfo, setUserInfo, setUserToken, login } = useAuth();

  return (
    <View style={styles.loginContainer}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Sign in</Text>
      <View style={{ justifyContent: "flex-start", width: "85%", height: 75 }}>
        <Text>Email</Text>
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
          value={userInfo?.email}
          onChangeText={(e) => setUserInfo!({ ...userInfo, email: e })}
        />
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          width: "85%",
          height: 75,
        }}
      >
        <Text>Password</Text>
        <TextInput
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: 5,
            paddingLeft: 10,
            height: 40,
            borderColor: "lightgray",
            borderWidth: 1,
            marginTop: 5,
          }}
          value={userInfo?.password}
          onChangeText={(e) => setUserInfo!({ ...userInfo, password: e })}
        />
      </View>
      <View
        style={{
          width: "80%",
          alignItems: "flex-end",
          marginTop: -30,
        }}
      >
        <Text
          onPress={() => setUserToken(undefined)}
          style={{ textDecorationLine: "underline" }}
        >
          Register
        </Text>
      </View>
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
          const res: any = await login!();
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
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "whitesmoke",
    width: " 75%",
    height: 400,
    borderRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
