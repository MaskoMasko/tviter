import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";

export const PostsList = ({ data }: any) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text>{JSON.stringify(item, null, 2)}</Text>;
      }}
    />
  );
};
