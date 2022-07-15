import { useRoute } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";
import { C } from "~/constants";
import { store } from "~/store/RootStore";

export const Username = observer(function Username() {
  const route = useRoute();
  const params = route.params as { id: number };
  const userId: number = params.id;

  const userQuery = useQuery(["users", "user", userId], () =>
    store.userStore.readUserInfo(userId)
  );

  if (userQuery.isIdle || userQuery.isLoading)
    return (
      <View style={{ flex: 1, backgroundColor: C.moreYellowThanGreen }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 50 }}>
          Loading...
        </Text>
      </View>
    );
  if (userQuery.isError)
    return (
      <View style={{ flex: 1, backgroundColor: C.moreYellowThanGreen }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 50 }}>
          Error...
        </Text>
      </View>
    );

  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",
      }}
    >
      Posts from: {userQuery.data.name}
    </Text>
  );
});
