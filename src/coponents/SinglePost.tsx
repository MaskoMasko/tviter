import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button, Text } from "react-native";

export const SinglePost = ({ data }: any) => {
  const navigation = useNavigation() as any;
  const { post, user } = data;
  return (
    <View
      style={{
        width: "90%",
        marginVertical: 20,
        backgroundColor: "lightgray",
        borderRadius: 15,
      }}
    >
      <Text>{post.title}</Text>
      {user && (
        <Button
          title={user}
          onPress={() => navigation.navigate("Profile", { id: post.user_id })}
        />
      )}
      <Text>{post.body}</Text>
      <Text>... ago</Text>
    </View>
  );
};
