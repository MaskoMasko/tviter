import { observer } from "mobx-react-lite";
import React from "react";
import { Text } from "react-native";
import { useQuery } from "react-query";
import useAuth from "../hooks/useAuth";
import { store } from "../store/RootStore";

export const ProfileScreen = observer(() => {
  const { userToken } = useAuth();
  const { isLoading, isError, data } = useQuery(["users"], () =>
    store.getAllUsers(userToken!)
  );

  if (isLoading) return <Text>loading...</Text>;
  if (isError) return <Text>is error</Text>;
  return <Text>{JSON.stringify(data, null, 2)}</Text>;
});
