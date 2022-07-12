import { observer } from "mobx-react-lite";
import { Instance } from "mobx-state-tree";
import React from "react";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import { getUser, testingStore } from "../store/testing";

export const TestingScreen = observer(() => {
  //useQuery  mobX kako

  //if we read from stor, we dont need data prop??
  const { isLoading, isError, isIdle, data } = useQuery(["testing"], () => {
    //returna kako fetchati datu nekako w/e
    //so fetch from mobx Store -> to mobX store -> read from mobx?
    return testingStore.fetchPeople();
  });

  if (isIdle || isLoading) return <Text>loadingg..</Text>;
  if (isError) return <Text>error</Text>;

  console.log(data);

  getUser();
  return (
    <View>
      <Text>{testingStore.possiblySomething}</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      <Text>{JSON.stringify(data.results[0].name, null, 2)}</Text>
    </View>
  );
});
